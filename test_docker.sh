#!/bin/bash

echo "🐳 Probando build y ejecución con Docker..."
echo "=============================================="

# Limpiar contenedores/imágenes previos si existen
echo "🧹 Limpiando contenedores previos..."
docker stop landing-react 2>/dev/null || true
docker rm landing-react 2>/dev/null || true
docker rmi landing-component:latest 2>/dev/null || true

# Construir la imagen
echo "🔨 Construyendo imagen Docker..."
docker build -t landing-component:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build exitoso!"
    
    # Ejecutar contenedor en segundo plano
    echo "🚀 Ejecutando contenedor en puerto 8080..."
    docker run -d --name landing-react -p 8080:80 landing-component:latest
    
    if [ $? -eq 0 ]; then
        echo "✅ Contenedor ejecutándose!"
        echo ""
        echo "🌐 La aplicación está disponible en:"
        echo "   👉 http://localhost:8080"
        echo ""
        echo "📋 Comandos útiles:"
        echo "   • Ver logs: docker logs landing-react"
        echo "   • Parar:    docker stop landing-react"
        echo "   • Remover:  docker rm landing-react"
        echo ""
        
        # Esperar un poco y probar conectividad
        echo "⏳ Esperando que el servidor inicie..."
        sleep 3
        
        if curl -f -s http://localhost:8080 > /dev/null; then
            echo "✅ Servidor respondiendo correctamente!"
        else
            echo "⚠️  El servidor puede necesitar más tiempo para iniciar"
        fi
    else
        echo "❌ Error ejecutando contenedor"
        exit 1
    fi
else
    echo "❌ Error en build Docker"
    exit 1
fi
