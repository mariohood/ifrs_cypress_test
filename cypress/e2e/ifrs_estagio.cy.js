describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://poa.ifrs.edu.br')
    cy.get('.item-124 > a > img').click()
    cy.get('.item-839 > a > img').click()
    cy.get('.offset-sm-2 > .btn').click()

    // Seleccionar uma cidade na busqueda:
    cy.get('#select2-buscaCidade-container').click()
    cy.get('.select2-selection__placeholder').type('Porto Alegre')
    cy.get('.select2-results__option--highlighted').click()
  })

})