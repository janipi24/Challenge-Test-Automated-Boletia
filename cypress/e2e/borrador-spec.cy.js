describe('Compra de Boletos', () => {
  it('Realizar compra de Boletos gratis Boletia', () => {

    cy.visit('https://maximus-cupones.plupets.com/'); //abrir pagina
    cy.log('Abre página');

    cy.get(':nth-child(4) > .css-1ik4laa > .css-6fdojh > .css-cenhc2 > :nth-child(3)').should('be.visible').click(); //agregar 1 boleto

    cy.get('.css-a6rva7 > .MuiButtonBase-root').click().as('botón_compra_boleto'); //clic en comprar boletos

    cy.get('.css-i3pbo > .MuiBox-root > .MuiButtonBase-root').click().as('Inicio_Sesion_como_Vendedor'); //boton de incio sesion vendedor

    cy.get('[id=":r4:"]').should('be.visible').type('test@boletia.com').as('Campo_User'); //setear usuario 
    /*cy.wait(3000);
    cy.get('[id=":r4:"]').type('test@boletia.com');*/

    cy.get('[id=":r5:"]').type('testA123').as('Campo_Pass'); //setear pass

    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click(); // mostrar contraseña

    cy.get('.css-1rnx12 > .MuiButtonBase-root').click().as('Login_Usario'); //boton login

    ///cy.screenshot('Compra_Boleto_Finalizado');

    cy.contains('No Personalizar').should('be.visible').click();

   /// cy.screenshot('Compra_Boleto_Finalizado');

  }) 
})