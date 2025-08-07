#!/bin/bash

# Script para corregir la carga de estilos en modo desarrollo para todos los componentes

folders=("Basicos1.0.0" "Legales1.0.0" "SMS1.0.0" "INE1.0.0" "Selfie1.0.0" "CapturaRapida1.0.0" "CapturaCompleta1.0.0" "AltaProducto1.0.0")
names=("Basicos" "Legales" "SMS" "INE" "Selfie" "CapturaRapida" "CapturaCompleta" "AltaProducto")

echo "=== CORRIGIENDO CARGA DE ESTILOS EN DESARROLLO ==="

for i in "${!folders[@]}"; do
    folder="${folders[$i]}"
    name="${names[$i]}"
    
    echo "Corrigiendo $folder..."
    
    # Archivo index.ts de cada componente
    index_file="externals/$folder/src/index.ts"
    
    # Verificar si el archivo existe
    if [ -f "$index_file" ]; then
        # Agregar la importación de estilos si no existe
        if ! grep -q "getAllMicrofrontendStyles" "$index_file"; then
            # Crear respaldo
            cp "$index_file" "$index_file.backup"
            
            # Insertar la importación después de la línea de App
            sed -i "/import App from '.\/App';/a\\
// Importar estilos consolidados para modo desarrollo\\
import { getAllMicrofrontendStyles } from '.\/styles\/microfrontend-styles';" "$index_file"
            
            # Insertar la función de inyección de estilos
            sed -i "/\/\/ ESTILOS CONSOLIDADOS: Ya no se importan CSS individuales/a\\
\\
\/\/ Función para inyectar estilos en el documento principal (modo desarrollo)\\
function injectStylesForDevelopment() {\\
  \/\/ Crear elemento style si no existe\\
  let styleElement = document.getElementById('microfrontend-dev-styles') as HTMLStyleElement;\\
  if (!styleElement) {\\
    styleElement = document.createElement('style');\\
    styleElement.id = 'microfrontend-dev-styles';\\
    document.head.appendChild(styleElement);\\
  }\\
  \\
  \/\/ Inyectar todos los estilos consolidados\\
  styleElement.textContent = getAllMicrofrontendStyles();\\
  console.log('🎨 Estilos de desarrollo inyectados correctamente en $name');\\
}" "$index_file"
            
            # Modificar la carga del React App para incluir estilos
            sed -i "s/const root = createRoot(container);/\/\/ IMPORTANTE: Inyectar estilos antes de renderizar\\
    injectStylesForDevelopment();\\
    \\
    const root = createRoot(container);/" "$index_file"
            
            # Actualizar el console.log
            sed -i "s/console.log('🛠️ React App: Aplicación cargada correctamente');/console.log('🛠️ React App: Aplicación $name cargada correctamente con estilos');/" "$index_file"
        fi
        
        echo "✅ $folder corregido"
    else
        echo "❌ No se encontró $index_file"
    fi
done

echo ""
echo "🎉 Corrección de estilos completada para todos los componentes"
echo "💡 Los estilos ahora se cargarán correctamente en modo desarrollo"
