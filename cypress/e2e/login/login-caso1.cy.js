describe("Login de prueba - Caso de prueba exitoso", () => {
  beforeEach(() => {
    cy.loginVisita();
  });

  it("debería mostrar el formulario de login", () => {
    //Email
    cy.get('[type="email"]').type("doe@example.com");
    //Password
    cy.get('[type="password"]').type("abc123");
    cy.get("button").click();
  });
});
