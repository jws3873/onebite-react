# 1. Node 기반으로 빌드
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# 2. Nginx 이미지로 결과물 제공
FROM nginx:alpine

# Nginx 설정 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# 포트 노출
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]