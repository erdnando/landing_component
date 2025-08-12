# Dockerfile para React App (Landing Page - Bradescard Promoda)
FROM node:20-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias (incluye devDependencies para el build)
RUN npm ci --silent || npm install --silent

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Imagen final con nginx para servir archivos estáticos
FROM nginx:alpine

# Copiar archivos build al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
