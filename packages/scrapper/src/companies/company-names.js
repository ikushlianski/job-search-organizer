const puppeteer = require('puppeteer');
const dbModule = require('../db');

require('dotenv').config();

const companiesPage = process.env.COMPANIES_PAGE;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(companiesPage);

  const companyNames = await page.$$eval(
    process.env.COMPANY_NAME_PATH,
    getCompaniesFromPage,
  );

  await saveCompanyNamesToDB(companyNames);

  await browser.close();
})();

function getCompaniesFromPage(elements) {
  return elements
    .map((element) => element.innerText)
    .map((element) => element.replaceAll('"', ''));
}

async function saveCompanyNamesToDB(names) {
  await dbModule.saveCompanies(names);
}
