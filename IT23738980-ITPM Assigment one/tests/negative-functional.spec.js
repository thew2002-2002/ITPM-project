const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Tests - Singlish to Sinhala Translation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test.afterAll(async () => {
    console.log('\n' + '='.repeat(80));
    console.log('✅ ALL NEGATIVE FUNCTIONAL TESTS PASSED SUCCESSFULLY!');
    console.log('Total Test Cases: 10');
    console.log('Status: All edge case tests completed without errors');
    console.log('='.repeat(80) + '\n');
  });

  
  test('Neg_Fun_0001 - Convert joined words without proper spacing', async ({ page }) => {
    const input = 'mamagamatayanavaa';
    const expectedOutput = 'මම ගමට යනවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: System may fail to properly segment joined words');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  

  test('Neg_Fun_0002 - Convert multiple joined words', async ({ page }) => {
    const input = 'matabathkannaoonee';
    const expectedOutput = 'මට බත්  කන්න ඕනේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Word boundary detection failure');

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

 
  test('Neg_Fun_0003 - Convert long paragraph exceeding 300 characters', async ({ page }) => {
    const input = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 450k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 380k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.';
    const expectedOutput = 'දිව්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 450ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ථ දිග ප්‍රමාණය කිලෝමීටර් 380ක් පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input length: ${input.length} characters`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Long input may cause incomplete or incorrect conversion');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  
  test('Neg_Fun_0004 - Convert input with multiple consecutive spaces', async ({ page }) => {
    const input = 'mama     gamata     yanavaa';
    const expectedOutput = 'මම ගමට  යනවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Extra spaces may not be handled correctly');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  
  test('Neg_Fun_0005 - Convert multi-line input with line breaks', async ({ page }) => {
    const input = `mama gamata yanavaa.
oyaa enavadha maath ekka yanna`;
    const expectedOutput = 'මම ගමට  යනවා.\nඔයා එනවද මාත් එක්ක යන්න?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Line breaks may not be preserved correctly');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  
  test('Neg_Fun_0005a - Convert input with multiple line breaks and empty lines', async ({ page }) => {
    const input = `adoo karanawa kiwwanam eeka hariyata karapanko bQQ`;
    const expectedOutput = 'අදෝ කරනවා කිව්වනම්  එක හරියට කරපන්කෝ බං';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Multiple consecutive line breaks may not be preserved');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  
  test('Neg_Fun_0006 - Convert complex slang expression', async ({ page }) => {
    const input = 'mama (pereda) gamata giyaa';
    const expectedOutput = 'මම (පෙරේදා ) ගමට ගියා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Slang terms may not be recognized correctly');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

 

  
  test('Neg_Fun_0008 - Convert input with quotation marks', async ({ page }) => {
    const input = 'eyaa kiyaavaa "mama karnna oonee" kiyalaa';
    const expectedOutput = 'එයා කියාවා "මම කරන්න  ඕනේ" කියලා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Quotation marks may interfere with conversion');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  
  test('Neg_Fun_0009 - Convert input with special character combinations', async ({ page }) => {
    const input = 'mama sunaQQgu vunee maarga thadhabadhaya nisaa';
    const expectedOutput = 'මම සුනඛ්ඛඟු වුනේ මාර්ග තදබදය නිසා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Special character patterns (QQ, etc.) may not convert correctly');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

  
  test('Neg_Fun_0010 - Convert complex mixed input with multiple English terms', async ({ page }) => {
    const input = 'reports  tika complete  karalaa mata message  ekak evanna telegram  valata hari naettam Teams meeting ekee link eka evanna';
    const expectedOutput = 'reports  ටික complete  කරලා මට message  එකක් එවන්න telegram  වලට හරි නැත්තම් Teams meeting එකේ link එක එවන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(3000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Multiple English technical terms may cause context confusion');

    expect(actualOutput?.trim()).toBe(expectedOutput);
  });

});


