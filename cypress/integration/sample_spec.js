describe('My First Test', () => {
    it('Visits the mainpage', () => {
      cy.visit('https://fone-study-resources.netlify.app')
      cy.contains('Resources')
    })

    it('navigates to resource page', () => {
        cy.intercept('https://fone-study-resources.herokuapp.com/resource').as("fetchResource")
        cy.wait("@fetchResource")
        cy.get("button").eq(2).click()
      })
  })