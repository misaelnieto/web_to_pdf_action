FROM buildkite/puppeteer

COPY . /web_to_pdf/
WORKDIR /web_to_pdf
RUN npm install --production
RUN pwd
RUN ls

ENTRYPOINT ["node", "/web_to_pdf/dist/index.js"]
