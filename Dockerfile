# 📦 Node.js image
FROM node:20-alpine

# 📁 App papkasini yaratish
WORKDIR /app

# 📄 package.json va lock fayllarni ko‘chir
COPY package*.json ./
COPY .env ./
# 📦 Kerakli modullarni o‘rnatish
RUN npm install

# 📄 Barcha fayllarni ko‘chir
COPY . .

# 🌐 15975-portni och
EXPOSE 15975

# 🚀 Appni ishga tushur
CMD ["node", "src/app.js"]
