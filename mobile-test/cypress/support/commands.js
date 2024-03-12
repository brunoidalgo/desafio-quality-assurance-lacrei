import dados from "../fixtures/test.json"
import LoginPage from "../e2e/pages/homepage.js"

Cypress.Commands.add('login', () => { 
  const loginPage = new LoginPage()
  
  loginPage.fillUsername(test.firstname)
  loginPage.fillPassword(test.lastname)
  loginPage.submit() 
})
