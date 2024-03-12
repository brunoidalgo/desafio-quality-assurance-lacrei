import LoginPage from "./pages/homepage.js"
import pages from "../fixtures/pages.json"

describe('fluxo de pessoa usuária', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit(pages.homepage)
  })

  it("Cadastro da pessoa usuária", () => {
    loginPage.register_new_user()
  })

})