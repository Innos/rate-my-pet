import { chromium } from "playwright-chromium";
import { expect } from "chai";

describe("E2E tests", function(){
this.timeout(10000);

    it("Some Test", async () => {
        let browser = await chromium.launch({ headless: false, slowMo: 500});
        let page = await browser.newPage();
        
        await page.goto('http://localhost:5173/', {timeout: 5000});
        await page.waitForSelector('text="Create Pet"', {timeout: 5000});

        await page.click('text="Create Pet"', {timeout: 5000});

        await page.waitForSelector('#animalType', {timeout: 5000});

        let petKeyInput = await page.locator('#petKey');
        let newPetKey = await petKeyInput.inputValue();

        await page.fill("#name", 'Test Dog');
        await page.fill("#animalType", 'Dog');
        await page.fill("#breed", 'Chihuahua');

        await page.click('button:text-is("Create Pet")');

        await page.waitForSelector('text="Pets"', {timeout: 5000});
        await page.click('text="Pets"', {timeout: 5000});

        let angerCatLocator = page.locator(`#${newPetKey}`);
        let angerCat = await angerCatLocator;
        let text = await angerCat.textContent();

        expect(text).to.equal('Test Dog2 - Dog - Chihuahua');

        await page.close();
        await browser.close();
    })
})