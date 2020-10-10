# build project
FROM node:12.19-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci -dd
COPY . .
RUN npm run build

# create server image
FROM nginx:1.19.3-alpine AS create_server
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

# expose port
EXPOSE 80