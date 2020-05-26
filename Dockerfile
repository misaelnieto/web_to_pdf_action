FROM node:lts

COPY . /action/
WORKDIR /action
RUN npm install --production

ENTRYPOINT ["node", "action.js"]
