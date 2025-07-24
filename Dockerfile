## Step 1: Build frontend
FROM node:20 AS builder
WORKDIR /app

COPY client ./client
WORKDIR /app/client

RUN npm install
RUN npm run build

# Step 2: Build backend
FROM node:20
WORKDIR /app

# Copy backend files
COPY server ./server
WORKDIR /app/server

# Copy prisma folder explicitly
COPY server/prisma ./prisma

# Copy built frontend into backend
COPY --from=builder /app/client/dist ./client/dist

# Install dependencies and build TS
RUN npm install --legacy-peer-deps
RUN npx prisma generate
RUN npx tsc

# Environment setup
ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

# Start compiled server
CMD ["node", "dist/index.js"]

