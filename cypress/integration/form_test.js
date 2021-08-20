describe('Lambda Eats App', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const specialInput= () => cy.get('input[name=special]')
    const originalRedBox = () => cy.get('input[name=sauce]')
    const pepperoniBox = () => cy.get('input[name=pepperoni]')
    const sausageBox = () => cy.get('input[name=sausage')
    const orderButton = () => cy.get('button[id="order-button"]')
    const dropdown = () => cy.get('select[name=size]')

    it('Sanity check to make sure tests are working', ()=> {
        expect(1+3).to.equal(4)
        expect(1+1).not.to.equal(5)
    })

    it('Checks to see if proper elements show up', ()=> {
        nameInput().should('exist')
        emailInput().should('exist')
        specialInput().should('exist')
        originalRedBox().should('exist')
        pepperoniBox().should('exist')
        sausageBox().should('exist')
        orderButton().should('exist')
        dropdown().should('exist')
    })

    describe('Can fill out the form', ()=> {

        it('Add to order button is originally disabled', ()=> {
            orderButton().should('be.disabled')
        })

        it('Can fill out text inputs', ()=> {
            nameInput()
                .should('have.value', '')
                .type('Brent')
                .should('have.value', 'Brent')
            orderButton().should('be.disabled')

            emailInput()
                .should('have.value', '')
                .type('brent@gmail.com')
                .should('have.value', 'brent@gmail.com')
            orderButton().should('be.disabled')

            specialInput()
                .should('have.value', '')
                .type('make it with only one hand')
                .should('have.value', 'make it with only one hand')
            orderButton().should('be.disabled')
        })

        it('Can select a size', ()=> {
            dropdown().select('Small')
        })

        it('Can select a sauce', ()=> {
            originalRedBox().click({multiple:true})
        })

        it('Can select multiple toppings', ()=> {
            pepperoniBox().click()
            sausageBox().click()

        })

        it('Can fill out the whole form and submit', ()=> {
            nameInput()
            .should('have.value', '')
            .type('Brent')
            .should('have.value', 'Brent')
        orderButton().should('be.disabled')

        emailInput()
            .should('have.value', '')
            .type('brent@gmail.com')
            .should('have.value', 'brent@gmail.com')
        orderButton().should('be.disabled')

        dropdown().select('Small')
        
        originalRedBox().first().check()
        orderButton().should('be.not.disabled')

        pepperoniBox().click()
        sausageBox().click()

        orderButton().click()

        cy.contains('Brent')

        })
            
    })
})