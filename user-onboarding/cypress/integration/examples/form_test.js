

// write tests here
describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const roleInput = () => cy.get('select[name="role"]')
    const serverInput = () => cy.get('select[name="server"]')
    const genderInput = () => cy.get('input[name="gender"]')
    const termsInput = () => cy.get('input[name="terms"]')
    const form = () => cy.get('form')

    it('sanity checks', () => {
        // assertion(s)
        expect(5).to.equal(5)
        expect(1+2).to.equal(3)
        expect(3*5).to.equal(15)
        expect({}).to.eql({})
        expect({}).to.not.equal({})
        })
    
    it('name input works', () => {
        nameInput()
            .type('Alden Ho')
            .should('have.value', 'Alden Ho')
    })
    it('email input works', () => {
        emailInput()
            .type('ach52@gmail.com')
            .should('have.value', 'ach52@gmail.com')
    })
    it('password input works', () => {
        passwordInput()
            .type('fried_chicken')
            .should('have.value', 'fried_chicken')
    })
    it('terms checkbox working', () => {
        termsInput()
            .not('disabled')
            .check()
            .should('be.checked')
    })
    it('form submitted', () => {
        nameInput()
            .type('aldenho52')
        emailInput()
            .type('ach52@gmail.com')
        passwordInput()
            .type('fried_chicken')
        roleInput()
            .select('Magician')
        serverInput()
            .select('US WEST')
        genderInput()
            .check('male')
        termsInput()
            .check()
        form()
            .submit()
    })
    it('username form validation (atleast 3 chars long) working', () => {
        nameInput()
            .type('a')
        form()
            .contains('username must be at least 3 characters')
    })
    it('username form validation (username is required) working', () => {
        nameInput()
            .type('a')
            .clear()
        form()
            .contains('username is required')
    })
})