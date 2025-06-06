describe("Login de prueba - Caso de prueba password erroneo", () => {
  beforeEach(() => {
    cy.loginVisita();
  });

  it("Formulario de login ", () => {
    cy.log("Se escribe el correo electrónico de manera correcta");
    cy.get('[type="email"]').type("usuario@correo.com");
    cy.log("Se escribe la password inválida ");
    cy.get('[type="password"]').type(" .miPassword123");
    cy.get("app-login").click();
    cy.wait(3000);

    cy.get("button").click();
  });
});
