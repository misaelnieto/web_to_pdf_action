FROM fifsky/html-to-pdf
COPY . /opt/web_to_pdf_action/
# RUN npm install --production
# RUN echo "This is the current directory: `pwd`"
# RUN ls

ENTRYPOINT ["node", "/opt/web_to_pdf_action/dist/index.js"]
