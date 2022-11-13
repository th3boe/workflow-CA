# workflow-CA
## Status Badges

[![Automated Unit Testing](https://github.com/th3boe/workflow-CA/actions/workflows/unit-test.yml/badge.svg)](https://github.com/th3boe/workflow-CA/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/th3boe/workflow-CA/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/th3boe/workflow-CA/actions/workflows/e2e-test.yml)

## Installments
### Required workflows/ hooks for this CA:
1. Project is configured to run Prettier on commit [x]
2. Project is configured to run ESLint on commit [x]
3. Project is configured to run Jest on commit [x]
4.Project is configured to deploy to pages on merge to default [x]

### Required features run automatically in unit test:
1. The login function returns a valid token when provided with valid credentials [x]
2. The logout function clears the token from browser storage [x]
3. The create item function creates a new item on the API [x]

### Required features run automatically in end-to-end test:
1. The login form validates user inputs correctly based on API restrictions [x]
2. The create item form validates user inputs correctly based on API restrictions [x]
3. The logout button logs the user out when clicked [x]

### Change files
README file [x]
Project is configured for hosting [x]
