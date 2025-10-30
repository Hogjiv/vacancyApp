 
"use server";

import puppeteer from "puppeteer";

export async function getH1() {
  let browser;

  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("https://example.com");
    const h1 = await page.$eval("h1", (el) => el.textContent);

    return { h1: h1 || "H1 not found" };
  } catch (error) {
    return { h1: "Error: " + String(error) };
  } finally {
    if (browser) await browser.close();
  }
}
