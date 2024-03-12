import test from "../../fixtures/test.json"

class LoginPage {
  visit(page) {
    cy.visit(page)
  }

  fillUsername(username) {
    cy.get(":nth-child(1) > .inputContainer").type(username)
  }

  fillPassword(password) {
    cy.get("#password").type(password)
  }

  fillEmail(email) {
    cy.get('#email').type(email)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

  verify() {
    cy.get("h2").should("contain.text", "Boas-vindas à Lacrei Saúde!")
  }

  serch() {
    cy.get("#search").type(pesq)
    cy.get(".search-button-box > .sc-83837fc6-0 > .sc-83837fc6-1").click()
  }

  should() {
    cy.url().should("eq", pages.professionallist + pesq)
  }

  register_new_user() {
    cy.get('.efCqCH > .sc-83837fc6-1').click()
    cy.get('#first_name').type(test.firstname)
    cy.get('#last_name').type(test.lastname)
    cy.get('#email').type(test.email)
    cy.get('#password1').type(test.password)
    cy.get('#password2').type(test.password)
    cy.get(':nth-child(1) > label > .check-container > span').click()
    cy.get(':nth-child(2) > label > .check-container > span').click()
    cy.get('.fgwfJi > .sc-83837fc6-1').click()
    cy.get('.box-info').should('contain', 'O e-mail pode demorar alguns minutos para chegar.')
  }

  alter_perfil() {
    cy.get('.profile-img').click()
    cy.get('.sc-c22a538e-2 > .sc-83837fc6-0 > .sc-83837fc6-1').click()
    cy.get('#name').should('eql', 'Bruno')//.type(test.firstname)
    cy.get('#lastName').should('eql', test.lastname)//.type(test.lastname)
    // cy.get('#birth_date').type('02/06/2003')
    cy.get(':nth-child(4) > .sc-bda10a04-0 > :nth-child(2) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3').click()
    cy.get(':nth-child(5) > .sc-bda10a04-0 > :nth-child(2) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3').click()
    cy.get(':nth-child(6) > .sc-bda10a04-0 > :nth-child(3) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3').click()
    cy.get(':nth-child(7) > .sc-bda10a04-0 > :nth-child(5) > .sc-c48c9750-1 > .sc-c48c9750-2 > .sc-c48c9750-3').click()
    cy.get(':nth-child(1) > .sc-8f709adc-1 > .sc-8f709adc-2 > .sc-8f709adc-3').click()
    cy.get('.sc-c22a538e-8 > :nth-child(2) > .sc-83837fc6-0 > .sc-83837fc6-1').click()
  }
}

export default LoginPage
