class LoginVendedor {

        elements = {
                usernameInput: () => cy.get('[id=":r4:"]').as('Campo_User'),
                passwordInput: () => cy.get('[id=":r5:"]').as('Campo_Pass'),
                botonLogin: () => cy.get('.css-1rnx12 > .MuiButtonBase-root'),   
                mensajeError: () => cy.contains('Error de rol de usuario'),
        }

        typeUsername(username){
                this.elements.usernameInput().type(username)
        }
        typePassword(pass){
                this.elements.passwordInput().type(pass)
        }
        clicklogin() {
                this.elements.botonLogin().click()
        }
        
}      
export default new LoginVendedor();

