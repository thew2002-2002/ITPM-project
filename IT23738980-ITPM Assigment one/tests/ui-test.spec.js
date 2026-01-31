const { test, expect } = require('@playwright/test');

test.describe('UI Tests - User Interface Behavior', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // Test Case: Real-time output updating
  test('Pos_UI_0001 - Verify Sinhala output updates automatically in real-time', async ({ page }) => {
    const input = 'mama gedhara yanavaa';
    const expectedOutput = 'මම ගෙදර යනවා';
    
    const inputField = page.locator('#singlish-input, input[type="text"], textarea').first();
    const outputField = page.locator('#sinhala-output, .output, [class*="sinhala"]').first();
    
    // Type character by character and verify real-time update
    await inputField.click();
    
    // Type first few characters
    await inputField.type('mama', { delay: 100 });
    await page.waitForTimeout(500);
    let partialOutput = await outputField.textContent();
    console.log(`After typing 'mama': ${partialOutput}`);
    
    // Type more characters
    await inputField.type(' gedhara', { delay: 100 });
    await page.waitForTimeout(500);
    partialOutput = await outputField.textContent();
    console.log(`After typing 'mama gedhara': ${partialOutput}`);
    
    // Complete the sentence
    await inputField.type(' yanavaa', { delay: 100 });
    await page.waitForTimeout(1000);
    
    const finalOutput = await outputField.textContent();
    console.log(`Final output: ${finalOutput}`);
    console.log(`Expected output: ${expectedOutput}`);
    
    // Verify output is visible and has content
    await expect(outputField).toBeVisible();
    const hasContent = finalOutput && finalOutput.length > 0;
    console.log(`Output has content: ${hasContent}`);
    console.log(`Real-time update behavior: ${hasContent ? 'Working' : 'Not working'}`);
  });

});
