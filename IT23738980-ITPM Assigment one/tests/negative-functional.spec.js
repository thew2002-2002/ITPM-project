const { test, expect } = require('@playwright/test');

test.describe('Negative Functional Tests - Singlish to Sinhala Translation', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // Test Case 1: Joined words without spaces (stress test)
  test('Neg_Fun_0001 - Convert joined words without proper spacing', async ({ page }) => {
    const input = 'mamagedharayanavaa';
    const expectedOutput = 'මම ගෙදර යනවා'; // Proper separation
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: System may fail to properly segment joined words');
  });

  // Test Case 2: Complex joined expression
  test('Neg_Fun_0002 - Convert multiple joined words', async ({ page }) => {
    const input = 'matapaankannaoonee';
    const expectedOutput = 'මට පාන් කන්න ඕනේ';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Word boundary detection failure');
  });

  // Test Case 3: Long paragraph-style input
  test('Neg_Fun_0003 - Convert long paragraph exceeding 300 characters', async ({ page }) => {
    const input = 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.';
    const expectedOutput = 'දිව්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ථ දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input length: ${input.length} characters`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Long input may cause incomplete or incorrect conversion');
  });

  // Test Case 4: Multiple spaces between words
  test('Neg_Fun_0004 - Convert input with multiple consecutive spaces', async ({ page }) => {
    const input = 'mama     gedhara     yanavaa';
    const expectedOutput = 'මම ගෙදර යනවා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Extra spaces may not be handled correctly');
  });

  // Test Case 5: Line breaks in input
  test('Neg_Fun_0005 - Convert multi-line input with line breaks', async ({ page }) => {
    const input = `mama gedhara yanavaa.
oyaa enavadha maath ekka yanna?`;
    const expectedOutput = 'මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Line breaks may not be preserved correctly');
  });

  // Test Case 6: Complex slang with multiple informal terms
  test('Neg_Fun_0006 - Convert complex slang expression', async ({ page }) => {
    const input = 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ';
    const expectedOutput = 'අදෝ වැඩක් බාරගත්තානම් එක හරියට කරපන්කෝ බං';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Slang terms may not be recognized correctly');
  });

  // Test Case 7: Mixed content with parentheses
  test('Neg_Fun_0007 - Convert input with parentheses punctuation', async ({ page }) => {
    const input = 'mama (iiyee) gedhara giyaa';
    const expectedOutput = 'මම (ඊයේ) ගෙදර ගියා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Parentheses may not be preserved or handled correctly');
  });

  // Test Case 8: Input with quotation marks
  test('Neg_Fun_0008 - Convert input with quotation marks', async ({ page }) => {
    const input = 'eyaa kiyaavaa "mama yanna oonee" kiyalaa';
    const expectedOutput = 'එයා කියාවා "මම යන්න ඕනේ" කියලා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Quotation marks may interfere with conversion');
  });

  // Test Case 9: Unusual character combinations
  test('Neg_Fun_0009 - Convert input with special character combinations', async ({ page }) => {
    const input = 'mama sunaQQgu vunee maarga thadhabadhaya nisaa';
    const expectedOutput = 'මම සුනඛ්ඛඟු වුනේ මාර්ග තදබදය නිසා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Special character patterns (QQ, etc.) may not convert correctly');
  });

  // Test Case 10: Complex mixed language with multiple technical terms
  test('Neg_Fun_0010 - Convert complex mixed input with multiple English terms', async ({ page }) => {
    const input = 'Documents tika attach karalaa mata email ekak evanna WhatsApp valata hari naettam Teams meeting ekee link eka evanna';
    const expectedOutput = 'Documents ටික attach කරලා මට email එකක් එවන්න WhatsApp වලට හරි නැත්තම් Teams meeting එකේ link එක එවන්න';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    await inputField.fill(input);
    await page.waitForTimeout(1000);
    
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    const actualOutput = await outputField.textContent();
    
    console.log(`Input: ${input}`);
    console.log(`Expected: ${expectedOutput}`);
    console.log(`Actual: ${actualOutput}`);
    console.log('Issue: Multiple English technical terms may cause context confusion');
  });

});
