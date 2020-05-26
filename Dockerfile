FROM fifsky/html-to-pdf
COPY . .
RUN npm install --production
RUN echo "This is the current directory: `pwd`"
RUN ls

ENTRYPOINT ["node", "/dist/index.js"]
