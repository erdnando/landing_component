#!/bin/bash

echo "🧹 Iniciando limpieza de archivos no utilizados..."
echo "=================================================="

# Archivos de prueba/testing no utilizados
echo "📁 Eliminando archivos de testing no utilizados..."
if [ -f "src/AppTester.tsx" ]; then
    rm src/AppTester.tsx
    echo "✅ Eliminado: src/AppTester.tsx"
fi

if [ -f "src/index-tester.ts" ]; then
    rm src/index-tester.ts
    echo "✅ Eliminado: src/index-tester.ts"
fi

if [ -f "src/index-tester.tsx" ]; then
    rm src/index-tester.tsx
    echo "✅ Eliminado: src/index-tester.tsx"
fi

if [ -f "src/components/RequirementsViewTester.tsx" ]; then
    rm src/components/RequirementsViewTester.tsx
    echo "✅ Eliminado: src/components/RequirementsViewTester.tsx"
fi

if [ -f "webpack.tester.js" ]; then
    rm webpack.tester.js
    echo "✅ Eliminado: webpack.tester.js"
fi

# Componentes alternativos no utilizados
echo "📁 Eliminando versiones alternativas de componentes no utilizados..."
if [ -f "src/components/requirements/RequirementsView.new.tsx" ]; then
    rm src/components/requirements/RequirementsView.new.tsx
    echo "✅ Eliminado: src/components/requirements/RequirementsView.new.tsx"
fi

if [ -f "src/components/requirements/RequirementsViewInverted.tsx" ]; then
    rm src/components/requirements/RequirementsViewInverted.tsx
    echo "✅ Eliminado: src/components/requirements/RequirementsViewInverted.tsx"
fi

# Archivos de estilos TypeScript no utilizados (ahora usamos index.css)
echo "📁 Eliminando archivos de estilos TypeScript no utilizados..."
if [ -f "src/styles/index.ts" ]; then
    rm src/styles/index.ts
    echo "✅ Eliminado: src/styles/index.ts"
fi

if [ -f "src/styles/microfrontend-styles.ts" ]; then
    rm src/styles/microfrontend-styles.ts
    echo "✅ Eliminado: src/styles/microfrontend-styles.ts"
fi

if [ -f "src/styles/microfrontend-styles-new-clean.ts" ]; then
    rm src/styles/microfrontend-styles-new-clean.ts
    echo "✅ Eliminado: src/styles/microfrontend-styles-new-clean.ts"
fi

if [ -f "src/styles/microfrontend-styles-test.ts" ]; then
    rm src/styles/microfrontend-styles-test.ts
    echo "✅ Eliminado: src/styles/microfrontend-styles-test.ts"
fi

if [ -f "src/styles/new-requirements-styles.ts" ]; then
    rm src/styles/new-requirements-styles.ts
    echo "✅ Eliminado: src/styles/new-requirements-styles.ts"
fi

# Directorios de estilos modularizados (ahora todo está en index.css)
echo "📁 Eliminando directorios de estilos modularizados no utilizados..."
if [ -d "src/styles/base" ]; then
    rm -rf src/styles/base
    echo "✅ Eliminado: src/styles/base/"
fi

if [ -d "src/styles/components" ]; then
    rm -rf src/styles/components
    echo "✅ Eliminado: src/styles/components/"
fi

if [ -d "src/styles/views" ]; then
    rm -rf src/styles/views
    echo "✅ Eliminado: src/styles/views/"
fi

# HTML de prueba
echo "📁 Eliminando archivos HTML de prueba no utilizados..."
if [ -f "public/test-iphone14.html" ]; then
    rm public/test-iphone14.html
    echo "✅ Eliminado: public/test-iphone14.html"
fi

if [ -f "public/test-microfrontend.html" ]; then
    rm public/test-microfrontend.html
    echo "✅ Eliminado: public/test-microfrontend.html"
fi

# Scripts de utilidad específicos del microfrontend
echo "📁 Eliminando scripts específicos del microfrontend no utilizados..."
if [ -f "assign_ports.sh" ]; then
    rm assign_ports.sh
    echo "✅ Eliminado: assign_ports.sh"
fi

if [ -f "fix_dev_styles.sh" ]; then
    rm fix_dev_styles.sh
    echo "✅ Eliminado: fix_dev_styles.sh"
fi

if [ -f "fix_references.sh" ]; then
    rm fix_references.sh
    echo "✅ Eliminado: fix_references.sh"
fi

if [ -f "update_components.sh" ]; then
    rm update_components.sh
    echo "✅ Eliminado: update_components.sh"
fi

if [ -f "verify_styles.sh" ]; then
    rm verify_styles.sh
    echo "✅ Eliminado: verify_styles.sh"
fi

# Configuración de Docker y nginx (MANTENEMOS ESTOS)
echo "� Manteniendo configuración de Docker/nginx (necesaria para deployment)..."
echo "   ✅ Dockerfile - Actualizado para React App"
echo "   ✅ nginx.conf - Configurado para SPA con optimizaciones"
echo "   ✅ .dockerignore - Optimiza el contexto de build"

echo ""
echo "🎉 Limpieza completada!"
echo "=================================================="
echo "📊 Resumen de archivos que permanecen activos:"
echo "   - src/index.tsx (punto de entrada React)"
echo "   - src/App.tsx (componente principal)"
echo "   - src/styles/index.css (estilos consolidados)"
echo "   - src/components/ (componentes funcionales)"
echo "   - src/core/ (contexto de la aplicación)"
echo "   - public/index.html (HTML principal)"
echo "   - webpack.config.js (configuración de build)"
echo "   - package.json (dependencias)"
echo "   - cleanup.sh (script de limpieza general)"
echo ""
echo "⚠️  IMPORTANTE: Antes de ejecutar, haz un backup o commit de tu trabajo actual."
echo "   Puedes probar el script con 'bash cleanup_unused_files.sh'"
