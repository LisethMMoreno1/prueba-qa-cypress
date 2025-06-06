describe("Login de prueba - Caso de prueba exitoso", () => {
  beforeEach(() => {
    cy.loginVisita();
  });

  it("debería mostrar el formulario de login", () => {
 
    cy.get('[type="email"]').type("asmith@example.com");
    cy.get('[type="password"]').type("password1");
    cy.get("button").click();
    cy.wait(5000)
  });
});
