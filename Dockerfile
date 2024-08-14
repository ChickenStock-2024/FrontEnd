# 최신 노드 이미지 사용
FROM --platform=linux/amd64 node:latest as build-stage

# set the working dir
WORKDIR /app

# package file을 working dir로 복사
COPY package*.json ./

# install package
RUN npm install

# 모든 프로젝트 파일을 container로 복사
COPY . .

# build front app
RUN npm run build

# lightweight nginx image
FROM --platform=linux/amd64 nginx:stable-alpine as production-stage

# 빌드한 app을 nginx container로 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
