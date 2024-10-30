import login from "../pages/login"


describe('Compra de Boletos', () => {

beforeEach(() => {
  cy.visit('https://maximus-cupones.plupets.com/') //abrir pagina
  cy.log('Abre página');
});

it('Realizar compra de Boletos gratis Boletia - Exitoso', () => {

    cy.wait(10000);

    cy.get(':nth-child(4) > .css-1ik4laa > .css-6fdojh > .css-cenhc2 > :nth-child(3)').should('be.visible').click(); //agregar 1 boleto

    cy.get('.css-a6rva7 > .MuiButtonBase-root').click().as('botón_compra_boleto'); //clic en comprar boletos

    cy.wait(7000);

    cy.get('.css-i3pbo > .MuiBox-root > .MuiButtonBase-root').click().as('Inicio_Sesion_como_Vendedor'); //boton de incio sesion vendedor

    login.typeUsername('test@boletia.com');
    
    login.typePassword('testA123.');

    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click(); // mostrar contraseña

    login.clicklogin();
    
    cy.wait(7000);

    cy.get('.css-1sfl73g > .MuiTypography-root').click();

    cy.get('[id=":r7:"]').should('be.visible').type('Nicolas Pirajan'); //nombre personalizado

    cy.get('.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root').click(); //guardar

    cy.wait(4000);

    cy.get('.MuiGrid-root > .MuiButtonBase-root').click(); //contiunar

    cy.get('[id=":r8:"]').type('Pepito'); 

    cy.get('[id=":r9:"]').type('Antolinez');

    cy.get('[id=":ra:"]').type('janipi24@hotmail.com');

    cy.get('.MuiGrid-grid-xs-7 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('be.visible').type('3118594708');

    cy.get('.css-p84cm4 > .MuiButtonBase-root').click();

    cy.wait(4000);

    cy.get('.MuiTypography-body7'); //detectar lo conseguiste

    cy.screenshot('Proceso_Exitoso');
    
  }) 

  /*it('Realizar compra de Boletos gratis Boletia - Fallido', () => {

     cy.wait(10000);
 
     cy.get(':nth-child(4) > .css-1ik4laa > .css-6fdojh > .css-cenhc2 > :nth-child(3)').should('be.visible').click(); //agregar 1 boleto
 
     cy.get('.css-a6rva7 > .MuiButtonBase-root').click().as('botón_compra_boleto'); //clic en comprar boletos
 
     cy.get('.css-i3pbo > .MuiBox-root > .MuiButtonBase-root').click().as('Inicio_Sesion_como_Vendedor'); //boton de incio sesion vendedor
 
     login.typeUsername('test@user-errado.com');//user errado
     
     login.typePassword('PASS-ERRADO'); //pass errado
 
     cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click(); // mostrar contraseña
 
     login.clicklogin();
     
     cy.wait(4000);
     
     login.elements.mensajeError().should('have.text','Error de rol de usuario, solo el vendedor puede realizar esta acción');

     cy.screenshot('Error_login');
     
   }) 
*/

})