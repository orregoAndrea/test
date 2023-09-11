
describe('search test cases',function(){
    it('search with results',function(){
        cy.visit('https://tiendaonline.movistar.com.ar/');
        cy.screenshot();
        cy.get('.categories').contains('Moto G32').click();
        cy.screenshot();




    });
});