FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app/api
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3001
RUN chown -R node /app/api
USER node
CMD ["npm", "run",  "prod"]