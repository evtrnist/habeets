# Базовый образ
FROM node:18 as base
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

# Сборка Angular-приложения
FROM base as angular-build
COPY . .
RUN npx nx build habeets --prod

# Сборка NestJS-приложения
FROM base as nestjs-build
COPY . .
RUN npx nx build habeets-back

# Финальный образ для Angular-приложения
FROM node:18 as angular-final
WORKDIR /usr/src/app
COPY --from=angular-build /usr/src/app/dist/apps/habeets ./dist/apps/habeets
CMD ["npx", "http-server", "-p", "80", "./dist/apps/habeets"]

# Финальный образ для NestJS-приложения
FROM node:18 as nestjs-final
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --production
COPY ./apps/habeets-back/src/database/schema.prisma ./apps/habeets-back/src/database/schema.prisma
COPY --from=nestjs-build /usr/src/app/dist/apps/habeets-back ./dist/apps/habeets-back
RUN npx prisma generate

# Команда запуска NestJS-приложения
CMD ["node", "dist/apps/habeets-back/main"]
