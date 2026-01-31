# Singlish to Sinhala Translator - Automated Testing Project

This project contains automated tests for the Singlish to Sinhala translation system at https://www.swifttranslator.com/

## Project Structure

```
singlish-translator-tests/
├── tests/
│   ├── positive-functional.spec.js  (24 positive test cases)
│   ├── negative-functional.spec.js  (10 negative test cases)
│   └── ui-test.spec.js              (1 UI test case)
├── playwright.config.js
├── package.json
└── README.md
```

## Test Coverage

### Positive Functional Tests (24 test cases)
- Simple, compound, and complex sentence structures
- Interrogative (questions) and imperative (commands)
- Positive and negative sentence forms
- Common greetings, requests, and responses
- Polite vs informal phrasing
- Daily language expressions
- Multi-word expressions and phrase patterns
- Repeated word expressions for emphasis
- Tense variations (past, present, future)
- Negation patterns
- Plural forms and pronoun variations
- Mixed Singlish + English content
- English technical terms, brand names, and abbreviations
- Punctuation marks
- Currency and date formats
- Slang and colloquial phrasing

### Negative Functional Tests (10 test cases)
- Joined words without proper spacing (robustness test)
- Long paragraph inputs (>300 characters)
- Multiple consecutive spaces
- Line breaks in multi-line input
- Complex slang expressions
- Inputs with special punctuation (parentheses, quotes)
- Special character combinations
- Complex mixed language with multiple technical terms

### UI Test (1 test case)
- Real-time output updating behavior

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Install Playwright browsers:

```bash
npx playwright install chromium
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests with browser UI visible
```bash
npm run test:headed
```

### Run specific test suites
```bash
# Run only positive functional tests
npm run test:positive

# Run only negative functional tests
npm run test:negative

# Run only UI test
npm run test:ui
```

### View test report
```bash
npm run report
```

## Test Results

After running tests, you can view:
- Console output with input/expected/actual values
- HTML report (automatically opens or use `npm run report`)
- Screenshots for failed tests in `test-results/` directory
- Videos for failed tests in `test-results/` directory

## Test Case Naming Convention

- **Pos_Fun_XXXX**: Positive Functional Test Cases
- **Neg_Fun_XXXX**: Negative Functional Test Cases
- **Pos_UI_XXXX**: Positive UI Test Cases

## Notes

1. All tests access https://www.swifttranslator.com/ as the base URL
2. Tests wait for network to be idle before executing
3. Each test includes a 1-second delay after input to allow for translation
4. Console logs show input, expected output, and actual output for verification
5. The system performs real-time translation without requiring a "Convert" button

## Test Execution Details

Each functional test:
1. Navigates to the translator page
2. Locates the Singlish input field
3. Enters the test input
4. Waits for real-time translation
5. Captures the Sinhala output
6. Logs results to console

The UI test:
1. Types input character by character
2. Monitors real-time output updates
3. Verifies output visibility and content generation

## Troubleshooting

If tests fail to run:
1. Ensure Node.js and npm are properly installed
2. Verify Playwright browsers are installed: `npx playwright install`
3. Check internet connection (tests access live website)
4. Review console logs for specific error messages

## Author

IT3040 ITPM Assignment 1 - BSc (Hons) Information Technology Year 3
