it('cy.fixture() - load a fixture', () => {
    cy.fixture('users.json').then(function(users) {
       cy.intercept('GET', '**/users.json', { 
          status: 200,
          body: users
       }).as('users')
       cy.visit('http://cypress.fsbano.io/')
       cy.get('input[type=button][value="Get Users"]').click()
       cy.wait('@users').then((interception) => {
	 assert.isNotNull(interception.response.body, '1st API call has data')
       })
       cy.get('div').contains('me@fsbano.io')
       cy.wait(15000)
    })
})
