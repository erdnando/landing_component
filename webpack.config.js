const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  // Usamos la información del modo para logging
  const isDevelopment = argv.mode === 'development';
  console.log(`Building in ${isDevelopment ? 'development' : 'production'} mode`);
  
  return {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? 'bundle.js' : 'landing-v1.0.0.js',
      chunkFilename: '[name].[contenthash].js',
      // Solo usar library config para producción (web component)
      ...(isDevelopment ? {} : {
        library: {
          name: 'LandingComponent',
          type: 'umd',
          export: 'default',
        },
        umdNamedDefine: true,
        globalObject: 'this',
      }),
      publicPath: isDevelopment ? '/' : 'auto',
      scriptType: 'text/javascript',
      clean: true, // Limpia dist folder antes de build
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
              options: isDevelopment ? {
                // Configuración simple para desarrollo React
                injectType: 'styleTag',
              } : {
                // Configuración compleja para producción (web component)
                injectType: 'singletonStyleTag',
                attributes: { id: 'landing-component-styles' },
                // Asegurar que los estilos se inserten y preserven para Shadow DOM
                insert: function(element) {
                  // Guardamos los estilos para que LandingWebComponent pueda acceder a ellos
                  if (typeof window !== 'undefined') {
                    // @ts-ignore
                    window._landingComponentStyles = window._landingComponentStyles || [];
                    // @ts-ignore
                    window._landingComponentStyles.push(element.textContent || element.innerText);
                    
                    // También marcar específicamente estilos críticos
                    if (element.textContent?.includes('benefits-grid-modern')) {
                      // @ts-ignore
                      window._landingCriticalStyles = element.textContent;
                    }
                  }
                  
                  // Inserción normal al head
                  const parent = document.head || document.getElementsByTagName('head')[0];
                  parent.appendChild(element);
                }
              }
            },
            {
              loader: 'css-loader',
              options: {
                // Esto es importante para asegurar que los imports de CSS se resuelvan correctamente
                importLoaders: 1,
                // No usar módulos para permitir que los estilos sean globales cuando se necesite
                modules: false,
                sourceMap: isDevelopment,
                // Exportar estilos como string solo en producción
                ...(isDevelopment ? {} : { exportType: 'string' })
              }
            }
          ]
        }
      ]
    },
    // Incluir todo en el bundle (React y estilos) para asegurar compatibilidad
    externals: {},
    optimization: {
      // Deshabilitamos splitChunks para evitar conflictos de archivos
      minimize: true,
      // Asegurar que todo se empaqueta en un solo archivo
      runtimeChunk: false,
    },
    plugins: [
      // Para desarrollo: inyectar automáticamente el script en el HTML
      ...(isDevelopment ? [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public/index.html'),
          filename: 'index.html',
        })
      ] : []),
      // Esto es crucial para que los estilos se incluyan correctamente
      new (require('webpack')).DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isDevelopment ? 'development' : 'production'),
        'process.env.INCLUDE_STYLES': 'true',
        'process.env.COMPONENT_VERSION': JSON.stringify('1.0.0'),
      }),
      // BannerPlugin agrega un banner al inicio del archivo bundle (solo para producción)
      ...(!isDevelopment ? [
        new (require('webpack')).BannerPlugin({
          banner: `Landing Web Component v1.0.0
Generated: ${new Date().toISOString()}
This is a self-registering web component. It will automatically register as 'landing-web-component'.`,
          raw: false,
          entryOnly: true
        })
      ] : []),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 3001,
      hot: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  };
};
