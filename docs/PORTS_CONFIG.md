# 🌐 **CONFIGURACIÓN DE PUERTOS - FLOW DESIGNER COMPONENTS**

## 📋 **Asignación de Puertos**

Cada componente tiene asignado un puerto único para desarrollo independiente:

| Componente | Puerto | URL de Desarrollo | Carpeta |
|------------|--------|-------------------|---------|
| **Landing** (principal) | `3001` | http://localhost:3001 | `/` (raíz) |
| **Basicos** | `3002` | http://localhost:3002 | `/externals/Basicos1.0.0/` |
| **Legales** | `3003` | http://localhost:3003 | `/externals/Legales1.0.0/` |
| **SMS** | `3004` | http://localhost:3004 | `/externals/SMS1.0.0/` |
| **INE** | `3005` | http://localhost:3005 | `/externals/INE1.0.0/` |
| **Selfie** | `3006` | http://localhost:3006 | `/externals/Selfie1.0.0/` |
| **CapturaRapida** | `3007` | http://localhost:3007 | `/externals/CapturaRapida1.0.0/` |
| **CapturaCompleta** | `3008` | http://localhost:3008 | `/externals/CapturaCompleta1.0.0/` |
| **AltaProducto** | `3009` | http://localhost:3009 | `/externals/AltaProducto1.0.0/` |

## 🚀 **Cómo Desarrollar Cada Componente**

### Para el componente principal (Landing):
```bash
# En la raíz del proyecto
npm run dev
# Se abrirá en http://localhost:3001
```

### Para cualquier componente externo:
```bash
# Navegar a la carpeta del componente
cd externals/[ComponentName]1.0.0

# Instalar dependencias (solo la primera vez)
npm install

# Iniciar desarrollo
npm run dev
```

### Ejemplos específicos:
```bash
# Basicos
cd externals/Basicos1.0.0 && npm run dev
# → http://localhost:3002

# Legales  
cd externals/Legales1.0.0 && npm run dev
# → http://localhost:3003

# SMS
cd externals/SMS1.0.0 && npm run dev
# → http://localhost:3004
```

## 🛠️ **Configuración Técnica**

Los puertos están configurados en el archivo `webpack.config.js` de cada componente:

```javascript
// webpack.config.js
module.exports = {
  // ...
  output: {
    publicPath: 'http://localhost:[PORT]/', // Para Module Federation
  },
  devServer: {
    port: [PORT], // Puerto del servidor de desarrollo
    // ...
  }
}
```

## ⚠️ **Notas Importantes**

1. **Conflictos de Puerto**: Asegúrate de que no haya otros servicios corriendo en estos puertos
2. **Module Federation**: Los `publicPath` están configurados para trabajar con Module Federation
3. **CORS**: Todos los componentes tienen configuración CORS habilitada
4. **Hot Reload**: Cada componente soporta hot reload independiente

## 🔧 **Modificar Puertos**

Si necesitas cambiar un puerto, edita estos valores en `webpack.config.js`:
- `devServer.port`  
- `output.publicPath`

O ejecuta el script de asignación automática:
```bash
./assign_ports.sh
```

---

*Generado automáticamente - Fecha: $(date)*
