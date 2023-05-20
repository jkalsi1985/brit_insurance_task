# Test scenario: Search for "IFRS 17" from Brit Insurance site

## What is this file?

This file outlines a test scenario that we need to implement in automated e2e testing using Cypress Javascript.

## Pre Requisites:

1. Go to https://www.britinsurance.com/
2. Click on search bar at top right side
3. In Search field, enter "IFRS 17"

## Tests

### Search for "IFRS 17" and validate result in drop down menu

Note: I've attempted to automate this test but the test kept failing due to cant get to click on search button to open search bar.

1. Validate three result is returned in suggestion drop down menu
2. Validate 3 result returned in drop down menu
3. Validate "Interim results for the six months ended 30 June 2022" is displayed in drop menu
4. Validate "Gavin Wilkinson" is displayed in drop down menu
5. Validate "John King" is displayed in drop down menu

### Search for "IFRS 17" and validate result in search result page

1. Click on search button
2. Validate 3 result returned in search result page
3. Under "News" section, validate "Interim results for the six months ended 30 June 2022" is displayed
4. Under "Culture" section, validate "Gavin Wilkinson" is displayed
5. Under "Culture" section, validate "John King" is displayed
