describe('My First Test', () => {
    it('Visits the mainpage loads resources', () => {
      cy.intercept('https://fone-study-resources.herokuapp.com/resources').as("fetchResource");
      cy.visit('https://fone-study-resources.netlify.app')
      cy.wait("@fetchResource");
    })

    it('checks for user get request', () => {
        cy.intercept('https://fone-study-resources.herokuapp.com/users').as("fetchUsers");
      cy.visit('https://fone-study-resources.netlify.app')
      cy.wait("@fetchUsers");
      })

    it('Clicks on Go To Youtube Video for resource', () => {
        cy.intercept('https://fone-study-resources.herokuapp.com/resources').as("fetchResource");
        cy.visit('https://fone-study-resources.netlify.app')
        cy.wait("@fetchResource");
        cy.get("button").contains("Go To Youtube Video").click()
        //cy.contains("Youtube")
      })
  })