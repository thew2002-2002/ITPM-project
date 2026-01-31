const { test, expect } = require('@playwright/test');

test.describe('Positive Functional Tests - Singlish to Sinhala Translation', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to load
    await page.waitForLoadState('networkidle');
  });

  // Test Case 1: Simple sentence - Daily language usage
  test('Pos_Fun_0001 - Convert simple present tense sentence', async ({ page }) => {
    const input = 'mama vaeda karanavaa';
    const expectedOutput = 'මම වැද කරනවා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 2: Compound sentence with conjunction
  test('Pos_Fun_0002 - Convert compound sentence with daily activities', async ({ page }) => {
    const input = 'mama kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa';
    const expectedOutput = 'මම කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයකුත් බලනවා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 3: Complex sentence with condition
  test('Pos_Fun_0003 - Convert complex sentence with conditional clause', async ({ page }) => {
    const input = 'oya enavaanam mama balan innavaa';
    const expectedOutput = 'ඔය එනවානම් මම බලන් ඉන්නවා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 4: Interrogative form - Question
  test('Pos_Fun_0004 - Convert interrogative sentence (question)', async ({ page }) => {
    const input = 'oyaata kohomadha?';
    const expectedOutput = 'ඔයාට කොහොමද?';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 5: Imperative form - Command
  test('Pos_Fun_0005 - Convert imperative sentence (command)', async ({ page }) => {
    const input = 'vahaama enna';
    const expectedOutput = 'වහාම එන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 6: Negative form sentence
  test('Pos_Fun_0006 - Convert negative sentence form', async ({ page }) => {
    const input = 'mama ehema karannee naehae';
    const expectedOutput = 'මම එහෙම කරන්නේ නෑ';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 7: Common greeting
  test('Pos_Fun_0007 - Convert common greeting phrase', async ({ page }) => {
    const input = 'aayuboovan!';
    const expectedOutput = 'ආයුබෝවන්!';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 8: Polite request
  test('Pos_Fun_0008 - Convert polite request with karuNaakaralaa', async ({ page }) => {
    const input = 'karuNaakaralaa eka poddak balanna';
    const expectedOutput = 'කරුණාකරලා එක පොඩ්ඩක් බලන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 9: Informal phrasing
  test('Pos_Fun_0009 - Convert informal command phrase', async ({ page }) => {
    const input = 'oya enne';
    const expectedOutput = 'ඔය එන්නේ';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 10: Daily expression
  test('Pos_Fun_0010 - Convert common daily expression', async ({ page }) => {
    const input = 'mata nidhimathayi';
    const expectedOutput = 'මට නිදිමතයි';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 11: Multi-word expression
  test('Pos_Fun_0011 - Convert multi-word phrase pattern', async ({ page }) => {
    const input = 'gihin enna';
    const expectedOutput = 'ගිහින් එන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 12: Repeated word for emphasis
  test('Pos_Fun_0012 - Convert repeated word expression', async ({ page }) => {
    const input = 'hari hari';
    const expectedOutput = 'හරි හරි';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 13: Past tense
  test('Pos_Fun_0013 - Convert past tense sentence', async ({ page }) => {
    const input = 'mama iiyee gedhara giyaa';
    const expectedOutput = 'මම ඊයේ ගෙදර ගියා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 14: Future tense
  test('Pos_Fun_0014 - Convert future tense sentence', async ({ page }) => {
    const input = 'mama heta enavaa';
    const expectedOutput = 'මම හෙට එනවා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 15: Plural form with pronoun variation
  test('Pos_Fun_0015 - Convert plural pronoun sentence', async ({ page }) => {
    const input = 'api yamu';
    const expectedOutput = 'අපි යමු';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 16: Mixed English technical term
  test('Pos_Fun_0016 - Convert sentence with English technical term (Zoom)', async ({ page }) => {
    const input = 'Zoom meeting ekak thiyennee';
    const expectedOutput = 'Zoom meeting එකක් තියෙන්නේ';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 17: Place names with English words
  test('Pos_Fun_0017 - Convert sentence with place name (Colombo)', async ({ page }) => {
    const input = 'siiyaa Colombo yanna hadhannee';
    const expectedOutput = 'සීයා Colombo යන්න හදන්නේ';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 18: English abbreviation
  test('Pos_Fun_0018 - Convert sentence with abbreviation (ASAP)', async ({ page }) => {
    const input = 'ASAP eka karanna';
    const expectedOutput = 'ASAP එක කරන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 19: Input with punctuation (question mark)
  test('Pos_Fun_0019 - Convert question with punctuation mark', async ({ page }) => {
    const input = 'oyaa enavadha?';
    const expectedOutput = 'ඔයා එනවද?';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 20: Input with exclamation mark
  test('Pos_Fun_0020 - Convert expression with exclamation mark', async ({ page }) => {
    const input = 'suba udhaeesanak!';
    const expectedOutput = 'සුභ උදෑසනක්!';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 21: Currency format
  test('Pos_Fun_0021 - Convert sentence with currency format', async ({ page }) => {
    const input = 'Rs. 5000 dhenna';
    const expectedOutput = 'Rs. 5000 දෙන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 22: Date format
  test('Pos_Fun_0022 - Convert sentence with date', async ({ page }) => {
    const input = 'dhesaembar 25 yanna';
    const expectedOutput = 'දෙසැම්බර් 25 යන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 23: Medium length input with multiple concepts
  test('Pos_Fun_0023 - Convert medium length compound sentence', async ({ page }) => {
    const input = 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee';
    const expectedOutput = 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

  // Test Case 24: Slang/colloquial expression
  test('Pos_Fun_0024 - Convert colloquial slang expression', async ({ page }) => {
    const input = 'ela machan! supiri!!';
    const expectedOutput = 'එල මචන්! සුපිරි!!';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
  });

});
