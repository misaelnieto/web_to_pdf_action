FROM node:lts

COPY action.js /action.js
RUN ["chmod", "+x", "/action.js"]
RUN npm install --production

ENTRYPOINT ["node", "/action.js"]
