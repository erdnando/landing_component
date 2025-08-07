#!/bin/bash

# Script para actualizar nombres de componentes en todos los clones
# Declarar arreglos de carpetas y nombres correspondientes
folders=("Legales1.0.0" "SMS1.0.0" "INE1.0.0" "Selfie1.0.0" "CapturaRapida1.0.0" "CapturaCompleta1.0.0" "AltaProducto1.0.0")
names=("Legales" "SMS" "INE" "Selfie" "CapturaRapida" "CapturaCompleta" "AltaProducto")
lowercase_names=("legales" "sms" "ine" "selfie" "capturarapida" "capturacompleta" "altaproducto")

# Función para actualizar cada componente
update_component() {
    local folder=$1
    local name=$2
    local lowercase_name=$3
    
    echo "Actualizando componente en $folder..."
    
    # Copiar archivo original limpio
    cp "src/LandingWebComponent.ts" "externals/$folder/src/${name}WebComponent.ts"
    
    # Actualizar clase
    sed -i "s/class LandingWebComponent/class ${name}WebComponent/g" "externals/$folder/src/${name}WebComponent.ts"
    
    # Actualizar componentId
    sed -i "s/componentId: string = 'landing'/componentId: string = '$lowercase_name'/g" "externals/$folder/src/${name}WebComponent.ts"
    
    # Actualizar custom element
    sed -i "s/'landing-web-component'/'$lowercase_name-web-component'/g" "externals/$folder/src/${name}WebComponent.ts"
    
    # Actualizar window properties
    sed -i "s/window.LandingWebComponent/window.${name}WebComponent/g" "externals/$folder/src/${name}WebComponent.ts"
    sed -i "s/window.landingComponentVersion/window.${lowercase_name}ComponentVersion/g" "externals/$folder/src/${name}WebComponent.ts"
    
    # Actualizar export
    sed -i "s/export default LandingWebComponent/export default ${name}WebComponent/g" "externals/$folder/src/${name}WebComponent.ts"
    
    # Actualizar index.ts
    sed -i "s/import LandingWebComponent from '.\/LandingWebComponent'/import ${name}WebComponent from '.\/${name}WebComponent'/g" "externals/$folder/src/index.ts"
    sed -i "s/export default LandingWebComponent/export default ${name}WebComponent/g" "externals/$folder/src/index.ts"
    sed -i "s/export { default as LandingComponent }/export { default as ${name}Component }/g" "externals/$folder/src/index.ts"
    
    echo "✅ Componente $name actualizado correctamente"
}

# Ejecutar actualización para cada componente
for i in "${!folders[@]}"; do
    update_component "${folders[$i]}" "${names[$i]}" "${lowercase_names[$i]}"
done

echo "🎉 Todos los componentes han sido actualizados"
