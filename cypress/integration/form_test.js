



describe('Unit-2 Sprint 3 Challenge form testing', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const name = () => cy.get('input[name=name]')
    const pepTop = () => cy.get('input[name=pepperoni')
    const banTop = () => cy.get('input[name=bannana]')
    const onionTop = () => cy.get('input[name=onions]')
    const sasuTop = () => cy.get('input[name=sausage]')
    const specialIns = () => cy.get('input[name=special]')
    const submit = () => cy.get('button[id=order-button]')
    

    it('Can type in name textbox', () => {
        name()
        .type("John Doe")
        .should('have.value', 'John Doe')
    })

    it('Can type in special textbox', () => {
        specialIns()
        .type('Cut into 12 slices')
        .should('have.value', 'Cut into 12 slices')
    })

    it('Can submit form once completed', () => {
        name()
        .type('John Doe')
        specialIns()
        .type('Cut into 12 slices')
        pepTop().click()
        banTop().click()
        onionTop().click()
        submit()
        .should('be.enabled')
        .click()

    })
})