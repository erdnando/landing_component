#!/bin/bash

# Script para asignar puertos únicos a cada componente
# Puerto base: 3001 (Landing), los demás consecutivos

# Declarar arreglos
folders=("Basicos1.0.0" "Legales1.0.0" "SMS1.0.0" "INE1.0.0" "Selfie1.0.0" "CapturaRapida1.0.0" "CapturaCompleta1.0.0" "AltaProducto1.0.0")
ports=(3002 3003 3004 3005 3006 3007 3008 3009)

echo "=== ASIGNACIÓN DE PUERTOS ==="
echo "Landing (principal): 3001"

# Función para actualizar puertos
update_ports() {
    local folder=$1
    local port=$2
    
    echo "Asignando puerto $port a $folder..."
    
    # Actualizar webpack.config.js - puerto del devServer
    sed -i "s/port: 3001,/port: $port,/g" "externals/$folder/webpack.config.js"
    
    # Actualizar webpack.config.js - publicPath
    sed -i "s|publicPath: 'http://localhost:3001/'|publicPath: 'http://localhost:$port/'|g" "externals/$folder/webpack.config.js"
    
    echo "✅ Puerto $port asignado a $folder"
}

# Ejecutar actualización para cada componente
for i in "${!folders[@]}"; do
    update_ports "${folders[$i]}" "${ports[$i]}"
done

echo ""
echo "🎉 PUERTOS ASIGNADOS:"
echo "- Landing (principal): http://localhost:3001"
echo "- Basicos:             http://localhost:3002"  
echo "- Legales:             http://localhost:3003"
echo "- SMS:                 http://localhost:3004"
echo "- INE:                 http://localhost:3005"
echo "- Selfie:              http://localhost:3006"
echo "- CapturaRapida:       http://localhost:3007"
echo "- CapturaCompleta:     http://localhost:3008"
echo "- AltaProducto:        http://localhost:3009"
echo ""
echo "Para desarrollar cada componente:"
echo "cd externals/[ComponentName]1.0.0 && npm run dev"
