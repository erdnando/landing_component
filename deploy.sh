#!/bin/bash

echo "🚀 Script de Deployment - Landing Bradescard Promoda"
echo "===================================================="

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para logging
log_info() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar si Docker está disponible
if ! command -v docker &> /dev/null; then
    log_error "Docker no está instalado o no está en PATH"
    exit 1
fi

log_info "Docker disponible"

# Verificar si Docker Compose está disponible
if ! command -v docker-compose &> /dev/null; then
    log_warning "docker-compose no disponible, usando docker compose"
    DOCKER_COMPOSE="docker compose"
else
    DOCKER_COMPOSE="docker-compose"
fi

# Limpiar recursos previos
echo ""
echo "🧹 Limpiando deployment previo..."
$DOCKER_COMPOSE down 2>/dev/null || true
docker rmi landing-component:latest 2>/dev/null || true

# Build de la aplicación local
echo ""
echo "🔨 Construyendo aplicación React..."
npm run build

if [ $? -ne 0 ]; then
    log_error "Error en build de la aplicación"
    exit 1
fi

log_info "Build local exitoso"

# Build de la imagen Docker
echo ""
echo "🐳 Construyendo imagen Docker..."
docker build -t landing-component:latest .

if [ $? -ne 0 ]; then
    log_error "Error en build Docker"
    exit 1
fi

log_info "Imagen Docker construida"

# Deployment con docker-compose
echo ""
echo "🚀 Iniciando deployment..."
$DOCKER_COMPOSE up -d

if [ $? -ne 0 ]; then
    log_error "Error en deployment"
    exit 1
fi

log_info "Deployment exitoso"

# Verificar que el servicio esté respondiendo
echo ""
echo "⏳ Verificando servicio..."
sleep 5

if curl -f -s http://localhost:8080 > /dev/null; then
    log_info "Servicio respondiendo correctamente"
    echo ""
    echo "🌐 Aplicación disponible en:"
    echo "   👉 http://localhost:8080"
    echo ""
    echo "📋 Comandos útiles:"
    echo "   • Ver logs:    $DOCKER_COMPOSE logs -f"
    echo "   • Parar:       $DOCKER_COMPOSE stop"
    echo "   • Reiniciar:   $DOCKER_COMPOSE restart"
    echo "   • Eliminar:    $DOCKER_COMPOSE down"
    echo "   • Estado:      $DOCKER_COMPOSE ps"
else
    log_warning "El servicio puede necesitar más tiempo para iniciar"
    echo "   Verifica manualmente: http://localhost:8080"
fi

echo ""
log_info "¡Deployment completado!"
