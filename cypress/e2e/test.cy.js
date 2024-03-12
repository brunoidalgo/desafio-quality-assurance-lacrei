import LoginPage from "./pages/homepage.js"
import pages from "../fixtures/pages.json"

describe("Fluxo da pessoa usuária", () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit(pages.homepage)
  })

  it("Cadastro da pessoa usuária", () => {
    loginPage.register_new_user()
  })

  it("Buscar uma pessoa profissional", () => {
    cy.login()
    loginPage.verify()
    loginPage.serch()
    loginPage.should()
  })

  it("Editar Perfil da Pessoa Usuária", () => {
    cy.login()
    loginPage.alter_perfil()
  })

  it.only("Esquecer a senha da pessoa usuária",() => {
    cy.loginWithWrongUser()
    cy.loginWithWrongPassword()
  })

  it("Testar reset de senha", () => {
    cy.loginWithoutPassword()
  })
})
