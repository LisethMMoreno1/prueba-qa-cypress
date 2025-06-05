describe("Prueba login con credenciales desde JSON", () => {
  beforeEach(() => {
    cy.loginVisita();
  });

  it("Prueba con las credenciales de JSON", () => {
    cy.fixture("credenciales").then((usuarios) => {
      cy.wrap(usuarios).each(({ email, password }) => {
        cy.get('[type="email"]').clear().type(email);
        cy.get('[type="password"]').clear().type(password);

        cy.get("button[type='submit']").click();

        cy.wait(3000);
        cy.url()
          .should("include", "/profile")
          .then(() => {
            cy.contains("button", "Cerrar sesión").click();
          });
        cy.reload();
      });
    });
  });
});
