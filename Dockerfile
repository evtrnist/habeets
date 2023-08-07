# Общий этап установки зависимостей
FROM node:18-alpine as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Этап сборки Angular приложения
FROM dependencies as angular-build
WORKDIR /app
COPY ./apps/habeets ./apps/habeets
RUN npm run nx build habeets --prod

# Этап сборки NestJS приложения
FROM dependencies as nestjs-build
WORKDIR /app
COPY ./apps/habeets-back ./apps/habeets-back
RUN npm run nx build habeets-back --prod

# Этап подготовки Angular приложения для запуска в контейнере
FROM nginx:1.17.1-alpine as angular-final
COPY --from=angular-build /app/dist/apps/habeets /usr/share/nginx/html

# Этап подготовки NestJS приложения для запуска в контейнере
FROM node:18-alpine as nestjs-final
WORKDIR /app
COPY --from=nestjs-build /app/dist/apps/habeets-back .
COPY package.json package-lock.json ./
RUN npm ci --production
CMD ["node", "main"]
