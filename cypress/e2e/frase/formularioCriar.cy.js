describe("Testando o formulário", ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/criar');
    });

    it("Formulário está visivel",()=>{
        cy.get('form').should('be.visible');
    });

    it("Preenchendo campos do formulário e enviar",()=>{
        cy.get('textarea[name="frase"]').type("Testando frase");
        cy.get('input[name="nomeAutor"]').type("Testando Autor");
        cy.get('form').submit();
    });

});