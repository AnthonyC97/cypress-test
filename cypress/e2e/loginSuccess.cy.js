describe("Inicio de sesión", () => {
  beforeEach(() => {
    cy.visit("https://voluntarios-pro-qt3nu4av6q-ue.a.run.app/");
  });

  it("debería permitir el inicio de sesión válido", () => {
    cy.get('input[name="email"]').type("anthonycarvajalescalante@gmail.com");
    cy.get('input[name="password"]').type("123456789aA");
    cy.get('button[type="submit"]').click();

    // validacion de inicio de sesion exitoso

    cy.xpath("//*[@class='flex items-center']").should("contain", "Perfil");

    //entro a editar perfil
    cy.xpath("//*[@class='text-primary text-sm underline']").click();

    // pantalla de editar perfil
    cy.get('input[name="allergies"]').clear();

    //con el campo vacio edito un valor del perfil
    cy.get('input[name="allergies"]').type("nada");

    //guardar el valor editado
    cy.get('button[type="submit"]').click();
    // validar un campo editable
    cy.xpath("//*[@class='block font-bold text-primary']").should(
      "contain",
      "nada"
    );
  });
});
