import dados from "../fixtures/dados.json"
import LoginPage from "../e2e/pages/homepage.js"

Cypress.Commands.add('login', () => { 

  const loginPage = new LoginPage()
  
  loginPage.fillUsername(dados.user)
  loginPage.fillPassword(dados.password)
  loginPage.submit()
})

Cypress.Commands.add('loginWithoutPassword', () => { 

  const loginPage = new LoginPage()
  
  loginPage.fillUsername(dados.user)
  loginPage.fillPassword(dados.password)
  cy.get('.buttons > a').click()
  cy.get('.sc-3016d1fa-0').should('contain', 'Redefinir senha')
  loginPage.fillEmail(dados.email)
  cy.get('.fgwfJi > .sc-83837fc6-1').click()
  cy.get('.sc-3016d1fa-0').should('contain', 'Verifique seu e-mail para redefinir a senha')
})

Cypress.Commands.add('loginWithWrongUser', () => { 

  const loginPage = new LoginPage()
  
  loginPage.fillUsername('teste')
  loginPage.fillPassword(dados.password)
  cy.get('.fgwfJi > .sc-83837fc6-1').click()
  cy.get('.sc-2926472a-1 > .sc-c83550c6-0').should('contain', 'Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br')
})


Cypress.Commands.add('loginWithWrongPassword', () => { 

  const loginPage = new LoginPage()
  
  loginPage.fillUsername(dados.user)
  loginPage.fillPassword('wrongpassword')
  cy.get('.fgwfJi > .sc-83837fc6-1').click()
  cy.get('.sc-2926472a-1 > .sc-c83550c6-0').should('contain', 'Sua senha e/ou conta está incorreta. Se tiver esquecido a senha, clique em “Esqueci minha senha”')
})