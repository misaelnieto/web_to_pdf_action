"use strict";
const core = require('@actions/core');
const puppeteer = require('puppeteer');

(async () => {
    try {
        const webPageURL = core.getInput('webPageURL');
        const outputFile = core.getInput('outputFile');
        const pdfDefaults = {
            'displayHeaderFooter': false,
            'path': outputFile
        };
        const pdfOpts = Object.assign({}, core.getInput('pdfOpts'), pdfDefaults);
        const pptrOpts = {
            executablePath: '/usr/bin/google-chrome-unstable',
            args: ['--no-sandbox', '--headless', '--disable-gpu']
        };
        console.log(`Starting PDF generation for ${webPageURL}`);

        const browser = await puppeteer.launch(pptrOpts);
        const daPage = await browser.newPage();
        await daPage.goto(webPageURL, {
            waitUntil: "networkidle0",
        })

        await daPage.pdf(pdfOpts)
        await browser.close()
        console.log(`DONE. Generated PDf file is at ${outputFile}`)
    }
    catch (error) {
        core.setFailed(error.message);
    }
})();

