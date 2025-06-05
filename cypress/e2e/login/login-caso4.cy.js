const { credencialesFalsas } = require("../credencialesFalsas");

describe("Prueba de login con credenciales al azar", () => {
  beforeEach(() => {
    cy.loginVisita();
  });

  for (let i = 1; i <= 5; i++) {
    it(`Iteración ${i}: debe escribir email y password aleatorios`, () => {
      cy.wait(3000);
      const { email, password } = credencialesFalsas();

      cy.log(`Usando email: ${email}`);
      cy.log(`Usando password: ${password}`);

      cy.get('[type="email"]').type(email);
      cy.get('[type="password"]').type(password);
      cy.get("button").click();
    });
  }
});
