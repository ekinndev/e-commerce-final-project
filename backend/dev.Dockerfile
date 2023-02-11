FROM node:16.13-alpine3.11

WORKDIR /app

RUN npm install tsc-watch -g

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate

VOLUME [ "/app/src" ]

EXPOSE 3000

CMD ["npm", "run", "watch"]