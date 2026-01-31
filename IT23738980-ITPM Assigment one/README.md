# Singlish to Sinhala Translator - Automated Testing Project

**Student ID:** IT23738980  
**Student Name:** Nimanya H N T  
**Course:** BSc (Hons) Information Technology - Year 3  
**Assignment:** IT3040 ITPM Assignment 1

---

## Overview

This project contains a comprehensive automated test suite for the **Singlish to Sinhala translation system** hosted at https://www.swifttranslator.com/. 

### Test Purpose
- Validate the translator's ability to convert informal Singlish text to formal Sinhala script
- Test edge cases, stress scenarios, and UI responsiveness
- Ensure real-time translation functionality works correctly
- Verify handling of special characters, line breaks, and mixed-language inputs

### Test Framework
- **Framework:** Playwright (Automated browser testing)
- **Language:** JavaScript/Node.js
- **Test Runner:** npm scripts
- **Browser:** Chromium

---

## Test Tags & Classification

| Tag | Type | Count | Purpose |
|-----|------|-------|---------|
| `Pos_Fun_XXXX` | **Positive Functional** | 24 | Verify correct translations for valid inputs |
| `Neg_Fun_XXXX` | **Negative Functional** | 10 | Test edge cases, boundary conditions, and robustness |
| `Pos_UI_XXXX` | **Positive UI** | 1 | Validate real-time UI update behavior |

**Total Test Cases:** 35

---

## Project Structure

```
IT23738980-ITPM Assignment one/
├── tests/                              # Test suite directory
│   ├── positive-functional.spec.js     # 24 positive test cases (valid inputs)
│   ├── negative-functional.spec.js     # 10 negative test cases (edge cases)
│   └── ui-test.spec.js                 # 1 UI behavioral test
├── test-results/                       # Generated test artifacts
│   ├── [test-result-folders]/          # Individual test execution results
│   └── *.md                            # Error context files
├── playwright-report/                  # HTML test report
│   ├── index.html                      # Main report page
│   └── data/                           # Report data files
├── playwright.config.js                # Playwright configuration
├── package.json                        # Dependencies and npm scripts
├── README.md                           # Project documentation
└── GIT_REPOSITORY_LINK.txt             # GitHub setup instructions
```

### Key Files Description

| File | Purpose |
|------|---------|
| `positive-functional.spec.js` | Core functionality tests: valid Singlish → Sinhala conversions |
| `negative-functional.spec.js` | Robustness tests: joined words, long text, special chars, etc. |
| `ui-test.spec.js` | Real-time translation UI behavior verification |
| `playwright.config.js` | Test execution settings (URL, timeout, browser) |
| `package.json` | Project dependencies and test scripts |

## Test Execution Flow

```
┌─────────────────────────────────────────────────────────────┐
│         Test Suite Initialization                           │
│  - Load Playwright framework                                │
│  - Configure Chromium browser                               │
│  - Set base URL: https://www.swifttranslator.com/          │
└────────────────────────┬────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  Positive    │ │  Negative    │ │     UI       │
│  Functional  │ │  Functional  │ │    Test      │
│  Tests (24)  │ │  Tests (10)  │ │     (1)      │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │
       │    ┌───────────┼───────────┐    │
       │    │           │           │    │
       ▼    ▼           ▼           ▼    ▼
┌─────────────────────────────────────────────────┐
│  For Each Test Case:                            │
│  1. beforeEach: Navigate to translator page     │
│  2. Wait for page to fully load (networkidle)   │
│  3. Locate input textarea element               │
│  4. Fill with Singlish input text               │
│  5. Wait 3000ms for real-time translation       │
│  6. Locate output Sinhala div element           │
│  7. Capture actual output                       │
│  8. Assert: actual output === expected output   │
│  9. Log results to console                      │
└──────────────┬────────────────────────────────┘
               │
       ┌───────┴────────┐
       │                │
    PASS            FAIL
       │                │
       ▼                ▼
   ✅ Success      📸 Screenshot
   📝 Logged       🎬 Video
                   📋 Error Log
```

---

## Test Case Summary by Category

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

## Test Execution Details

Each functional test follows this sequence:

1. **Setup Phase (`beforeEach`)**
   - Navigate to https://www.swifttranslator.com/
   - Wait for page resources to fully load (`networkidle`)

2. **Test Execution**
   - Input: Fill textarea with Singlish text
   - Delay: Wait 3000ms for real-time translation processing
   - Capture: Extract Sinhala output from output div
   - Assert: Compare actual vs expected output

3. **Cleanup & Reporting**
   - Log test results (input, expected, actual)
   - Log issue/context information
   - Generate screenshots/videos for failures
   - Output summary to console

---

The UI test follows a character-by-character typing pattern to verify real-time responsiveness:
- Type each word segment with 100ms delay between keystrokes
- Wait 3000ms between segments for translation
- Verify output div updates with each keystroke
- Confirm final output matches expected Sinhala text

---

If tests fail to run:
1. Ensure Node.js and npm are properly installed
2. Verify Playwright browsers are installed: `npx playwright install`
3. Check internet connection (tests access live website)
4. Review console logs for specific error messages

## Author

**Student:** Nimanya H N T  
**Student ID:** IT23738980  
**Course:** BSc (Hons) Information Technology - Year 3  
**Assignment:** IT3040 ITPM Assignment 1  
**Date:** January 2026

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Install browsers
npx playwright install chromium

# 3. Run all tests
npm test

# 4. View report
npm run report
```
