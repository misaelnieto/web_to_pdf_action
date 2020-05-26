FROM node:lts

COPY . .

RUN npm install --production

ENTRYPOINT ["node", "action.js"]
