# 1단계: React 앱 빌드용
FROM node:20-alpine as build

WORKDIR /app

# package.json과 lock 파일 먼저 복사 (의존성 캐시 활용)
COPY package*.json ./

RUN npm install

# 전체 소스 복사 (src, public, etc.)
COPY . .

RUN npm run build

# 2단계: Nginx를 이용한 정적 파일 서비스
FROM nginx:stable-alpine

# 빌드된 결과물 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 포트 오픈
EXPOSE 80

# 컨테이너가 종료되지 않도록
CMD ["nginx", "-g", "daemon off;"]