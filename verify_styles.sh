#!/bin/bash

# Script para verificar y actualizar referencias de estilos en todos los componentes

echo "=== VERIFICACIÓN DE ESTILOS EN COMPONENTES ==="

folders=("Basicos1.0.0" "Legales1.0.0" "SMS1.0.0" "INE1.0.0" "Selfie1.0.0" "CapturaRapida1.0.0" "CapturaCompleta1.0.0" "AltaProducto1.0.0")
names=("basicos" "legales" "sms" "ine" "selfie" "capturarapida" "capturacompleta" "altaproducto")

echo ""
echo "📋 Verificando referencias de clases CSS..."

for i in "${!folders[@]}"; do
    folder="${folders[$i]}"
    name="${names[$i]}"
    component_file="externals/$folder/src/${folder%1.0.0}WebComponent.ts"
    
    echo ""
    echo "🔍 Verificando $folder..."
    
    if [ -f "$component_file" ]; then
        # Verificar que tenga la clase correcta
        if grep -q "${name}-component-container" "$component_file"; then
            echo "  ✅ Clase CSS correcta: ${name}-component-container"
        else
            echo "  ❌ Falta la clase CSS correcta"
        fi
        
        # Verificar que busque estilos del componente correcto
        if grep -q "content.includes('${name}-component')" "$component_file"; then
            echo "  ✅ Búsqueda de estilos correcta: ${name}-component"
        else
            echo "  ⚠️  Búsqueda de estilos podría necesitar actualización"
        fi
        
        # Verificar que tenga el componentId correcto
        if grep -q "componentId: string = '${name}'" "$component_file"; then
            echo "  ✅ ComponentId correcto: ${name}"
        else
            echo "  ❌ ComponentId incorrecto o faltante"
        fi
    else
        echo "  ❌ Archivo no encontrado: $component_file"
    fi
done

echo ""
echo "📋 Verificando archivo de estilos consolidados..."

# Verificar que microfrontend-styles.ts tenga todas las clases
styles_file="src/styles/microfrontend-styles.ts"
if [ -f "$styles_file" ]; then
    echo ""
    echo "🎨 Verificando clases en microfrontend-styles.ts:"
    
    for i in "${!names[@]}"; do
        name="${names[$i]}"
        if grep -q "${name}-component-container" "$styles_file"; then
            echo "  ✅ ${name}-component-container definida"
        else
            echo "  ❌ ${name}-component-container FALTANTE"
        fi
    done
    
    # Verificar que tenga altura 100vh
    if grep -q "height: 100vh" "$styles_file"; then
        echo "  ✅ Altura 100vh configurada"
    else
        echo "  ❌ Altura 100vh no encontrada"
    fi
    
else
    echo "  ❌ Archivo de estilos no encontrado"
fi

echo ""
echo "🎉 Verificación completada"
echo ""
echo "💡 Si hay elementos marcados con ❌, necesitan corrección"
echo "💡 Si hay elementos marcados con ⚠️, revisa manualmente"
