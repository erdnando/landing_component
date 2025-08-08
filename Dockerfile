# Dockerfile para microfrontend React (landing)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --frozen-lockfile || npm install
COPY . .
RUN npm run build \
    && cp public/index.html dist/index.html \
    && sed -i '/<\/body>/i <script src="bundle.js"></script>' dist/index.html

# Imagen final, solo archivos estáticos
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
