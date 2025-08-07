#!/bin/bash

# Corrección final de referencias LandingWebComponent
folders=("Legales1.0.0" "SMS1.0.0" "INE1.0.0" "Selfie1.0.0" "CapturaRapida1.0.0" "CapturaCompleta1.0.0" "AltaProducto1.0.0")
names=("Legales" "SMS" "INE" "Selfie" "CapturaRapida" "CapturaCompleta" "AltaProducto")

for i in "${!folders[@]}"; do
    folder="${folders[$i]}"
    name="${names[$i]}"
    
    echo "Corrigiendo referencias en $folder..."
    
    # Corregir customElements.define
    sed -i "s/LandingWebComponent);/${name}WebComponent);/g" "externals/$folder/src/${name}WebComponent.ts"
    
    echo "✅ $folder corregido"
done

echo "🎉 Todas las referencias han sido corregidas"
