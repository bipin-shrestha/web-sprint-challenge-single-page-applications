describe("These are the pizza forms tests", () => {
    it("Renders our page to the screen", ()=>{
        cy.visit("http://localhost:3000/pizza");
    });

    it("Tests that you can add the text to the box", () => {
        cy.get('#specialInstruction')
          .type("Please add more cheese")
          .should('have.value',"Please add more cheese");
    });
    it("Test that you can select multiple toppings", () => {
        cy.get('#pepperoni').check().should("be.checked");
        cy.get('#sausage').check().should("be.checked");
        cy.get('#onions').check().should("be.checked");
        cy.get('#pineapple').check().should("be.checked");

    });
    it("Test that you can submit the form", () => {
        cy.get('form > button').should("be.disabled");
        cy.get('#customername').type("Bipin").should("have.value",'Bipin');
        cy.get('form > button').should("not.be.disabled");
        cy.get('form > button').click();        
    });
}); 