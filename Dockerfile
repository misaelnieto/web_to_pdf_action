FROM buildkite/puppeteer
COPY . /web_to_pdf_action/
ENTRYPOINT ["node", "/web_to_pdf_action/dist/index.js"]
