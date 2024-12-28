# Usa una imagen base oficial de Node.js
FROM node:18-alpine

RUN npm install -g pnpm

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json ./

# Instala las dependencias
RUN pnpm install

# Copia el resto del proyecto al contenedor
COPY . .

# Construye la aplicación Next.js
RUN pnpm build

# Expone el puerto que usará el servidor
EXPOSE 3000

# Comando para iniciar el servidor Next.js
CMD ["pnpm", "start"]
