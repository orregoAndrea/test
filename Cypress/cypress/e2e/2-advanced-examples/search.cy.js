describe('search test cases',function(){
    it('search with results',function(){
        cy.visit('https://www.carrefour.com.ar/');
        cy.get('#downshift-1-input').type('bolso').type('{enter}');




    });
});