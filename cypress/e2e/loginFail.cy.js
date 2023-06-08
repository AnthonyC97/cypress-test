describe("Falla de Inicio de sesión", () => {
  beforeEach(() => {
    cy.visit("https://voluntarios-pro-qt3nu4av6q-ue.a.run.app/");
  });

  it("debería mostrar un mensaje de error para el inicio de sesión inválido", () => {
    cy.get('input[name="email"]').type("anthonycarvajaescalante@gmail.com");
    cy.get('input[name="password"]').type("12345678aA");
    cy.get('button[type="submit"]').click();
    
    //si encuentra el boton aun esta en la pagina de inicio 
    cy.get('button[type="submit"]').should("be.visible");
  });
});
