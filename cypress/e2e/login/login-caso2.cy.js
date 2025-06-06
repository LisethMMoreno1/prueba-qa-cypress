describe("Login de prueba - Caso de prueba email erroneo", () => {
  beforeEach(() => {
    cy.loginVisita();
  });

  it("Formulario de login ", () => {

    cy.log("Se escribe el correo electrónico de manera errónea");
    cy.get('[type="email"]').type("usuario#correo.com");
    cy.get('[type="email"]').then(($input) => {
      const isValid = $input[0].checkValidity();

      if (!isValid) {
        throw new Error("Este paso solo se ejecuta si el correo es válido");
      }
    });
    cy.log("Se escribe la password normal ");
    cy.get('[type="password"]').type("miPassword123");
    cy.get("button").click();
  });
});
