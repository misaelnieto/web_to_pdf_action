"use strict";
const puppeteer = require('puppeteer');
const core = require('@actions/core');

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function run() {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}

run();
