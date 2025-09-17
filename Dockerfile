# Stage 1: Build
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# add --base-href if you serve from a subpath
RUN npm run build -- --configuration production

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist/EchoKnowledgeApp/browser /usr/share/nginx/html
# Optional: proxy /api -> backend (see nginx.conf below)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
