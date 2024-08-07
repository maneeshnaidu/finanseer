# Use the official Node.js image as a build stage
FROM node:16-alpine AS build
WORKDIR /finanseer
COPY frontend/package*.json ./
RUN npm install
COPY frontend/. .
RUN npm run build

# Use the official Nginx image to serve the build
FROM nginx:alpine
COPY --from=build /finanseer/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
