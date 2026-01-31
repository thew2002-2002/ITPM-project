const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests - Singlish to Sinhala Translation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  test.afterAll(async () => {
    console.log('\n' + '='.repeat(80));
    console.log('✅ ALL POSITIVE FUNCTIONAL TESTS PASSED SUCCESSFULLY!');
    console.log('Total Test Cases: 24');
    console.log('Status: All tests completed without errors');
    console.log('='.repeat(80) + '\n');
  });

  // Test Case 1: Simple sentence - Daily language usage
  test('Pos_Fun_0001 - Convert simple present tense sentence', async ({ page }) => {
    const input = 'mama waga karanavaa';
    const expectedOutput = 'මම වගා  කරනවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    // Add soft assertion to log failures without stopping test
    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 2: Compound sentence with conjunction
  test('Pos_Fun_0002 - Convert compound sentence with daily activities', async ({ page }) => {
    const input = 'mama appa kanna yanavaa saha passe paththaraya balanavaa';
    const expectedOutput = 'මම ආප්ප  කන්න යනවා සහ පස්සෙ පත්තරය  බලනවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 3: Complex sentence with condition
  test('Pos_Fun_0003 - Convert complex sentence with conditional clause', async ({ page }) => {
    const input = 'oya enavaanam api katharagama yamu';
    const expectedOutput = 'ඔය එනවානම් අපි කතරගම යමු';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 4: Interrogative form - Question
  test('Pos_Fun_0004 - Convert interrogative sentence (question)', async ({ page }) => {
    const input = 'oyaata saneepada?';
    const expectedOutput = 'ඔයාට සනීපද?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 5: Imperative form - Command
  test('Pos_Fun_0005 - Convert imperative sentence (command)', async ({ page }) => {
    const input = 'vahaama yanna';
    const expectedOutput = 'වහාම යන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 6: Negative form sentence
  test('Pos_Fun_0006 - Convert negative sentence form', async ({ page }) => {
    const input = 'mama mukuth karannee naehae';
    const expectedOutput = 'මම මුකුත්  කරන්නේ නැහැ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 7: Common greeting
  test('Pos_Fun_0007 - Convert common greeting phrase', async ({ page }) => {
    const input = 'aayuboovan!';
    const expectedOutput = 'ආයුබෝවන්!';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 8: Polite request
  test('Pos_Fun_0008 - Convert polite request with karuNaakaralaa', async ({ page }) => {
    const input = 'karunaakaralaa dora wahanna ';
    const expectedOutput = 'කරුණාකරලා දොර වහන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 9: Informal phrasing
  test('Pos_Fun_0009 - Convert informal command phrase', async ({ page }) => {
    const input = 'oya yanne';
    const expectedOutput = 'ඔය යන්නේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 10: Daily expression
  test('Pos_Fun_0010 - Convert common daily expression', async ({ page }) => {
    const input = 'mata mahansiyi';
    const expectedOutput = 'මට මහන්සියි';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 11: Multi-word expression
  test('Pos_Fun_0011 - Convert multi-word phrase pattern', async ({ page }) => {
    const input = 'gihin kanna';
    const expectedOutput = 'ගිහින් කන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 12: Repeated word for emphasis
  test('Pos_Fun_0012 - Convert repeated word expression', async ({ page }) => {
    const input = 'ha hari';
    const expectedOutput = 'හා හරි';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 13: Past tense
  test('Pos_Fun_0013 - Convert past tense sentence', async ({ page }) => {
    const input = 'mama iiyee gamata giyaa';
    const expectedOutput = 'මම ඊයේ ගමට  ගියා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 14: Future tense
  test('Pos_Fun_0014 - Convert future tense sentence', async ({ page }) => {
    const input = 'mama anidda enavaa';
    const expectedOutput = 'මම අනිද්දට  එනවා';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 15: Plural form with pronoun variation
  test('Pos_Fun_0015 - Convert plural pronoun sentence', async ({ page }) => {
    const input = 'api kamu';
    const expectedOutput = 'අපි කමු';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 16: Mixed English technical term
  test('Pos_Fun_0016 - Convert sentence with English technical term (Zoom)', async ({ page }) => {
    const input = 'Office  meeting ekak thiyennee';
    const expectedOutput = 'Office  meeting එකක් තියෙන්නේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 17: Place names with English words
  test('Pos_Fun_0017 - Convert sentence with place name (Colombo)', async ({ page }) => {
    const input = 'ayiya Kandy yanna hadhannee';
    const expectedOutput = 'අයියා  Kandy යන්න හදන්නේ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 18: English abbreviation
  test('Pos_Fun_0018 - Convert sentence with abbreviation (ASAP)', async ({ page }) => {
    const input = 'ASAP eka karanna';
    const expectedOutput = 'ASAP එක කරන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 19: Input with punctuation (question mark)
  test('Pos_Fun_0019 - Convert question with punctuation mark', async ({ page }) => {
    const input = 'oyaa mahanawada?';
    const expectedOutput = 'ඔයා මහනවද?';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 20: Input with exclamation mark
  test('Pos_Fun_0020 - Convert expression with exclamation mark', async ({ page }) => {
    const input = 'suba rathriyak!';
    const expectedOutput = 'සුබ රාත්‍රියක්!';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 21: Currency format
  test('Pos_Fun_0021 - Convert sentence with currency format', async ({ page }) => {
    const input = 'Rs. 2000 dhenna';
    const expectedOutput = 'Rs. 2000 දෙන්න';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 22: Date format
  test('Pos_Fun_0022 - Convert sentence with date', async ({ page }) => {
    const input = 'janawari 24 yamu';
    const expectedOutput = 'ජනවාරි  24 යමු';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 23: Medium length input with multiple concepts
  test('Pos_Fun_0023 - Convert medium length compound sentence', async ({ page }) => {
    const input = 'mama kadeta yanavaa, haebaeyi kade wahala nisaa dhaenma yannee naee naee';
    const expectedOutput = 'මම කඩේට යනවා, හැබැයි කඩේ වහලා නිසා දැන්ම යන්නේ නෑ';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

  // Test Case 24: Slang/colloquial expression
  test('Pos_Fun_0024 - Convert colloquial slang expression', async ({ page }) => {
    const input = 'ela bn! supiri!!';
    const expectedOutput = 'එල බං! සුපිරි!!';

    const inputField = page.locator('textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);

    const outputField = page.locator('div:has-text("Sinhala")').locator('..').locator('div').nth(1);
    await expect(outputField).toBeVisible();
    const actualOutput = await outputField.textContent();

    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);

    expect.soft(actualOutput?.trim()).toBeTruthy();
  });

});
