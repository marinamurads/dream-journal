FROM node:20-alpine

WORKDIR /app

COPY package*.json ./


RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate

EXPOSE 4000

CMD ["npm", "run", "dev"]
