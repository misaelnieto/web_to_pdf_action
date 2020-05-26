# Webpage to PDF action

A [GitHub Action](https://github.com/features/actions) to convert any webpage to a PDF document.

Internally uses Puppeteer's mojo to get the page and render it to print it to PDF.

## Inputs

* `webPageURL`: This is the URL of the page. **Required**.
* `outputFile`: Path to the generated PDF file. **Required**.
* `pdfOptions`: PDF options as described on [Puppeteer's documentation](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions). This is optional.

## ✨ Example Usage

```yml
- name: html to pdf
  uses: misaelnieto/web_to_pdf_action@master
  with:
    webPage: https://www.noenieto.com/resume/
    outputFile: ./path/to/my/resume.pdf
    pdfOptions: '{"format": "Letter", "margin": {"top": "10mm", "left": "10mm", "right": "10mm", "bottom": "10mm"}}'
```

## You may also like ...

[Fifsky's HTML to PDF action](https://github.com/fifsky/html-to-pdf-action).
