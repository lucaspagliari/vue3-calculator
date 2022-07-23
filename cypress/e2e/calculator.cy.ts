context("Calculator Buttons", () => {
  const gid = cy.getTestId;
  const g = cy.get;

  it("should render buttons", () => {
    cy.visit("/");
    for (let i = 0; i <= 9; i++) {
      cy.contains("button", `${i}`);
    }
    ["÷", "×", "-", "+"].forEach((e) => {
      cy.contains("button", `${e}`);
    });
    ["=", "←"].forEach((e) => {
      cy.contains("button", `${e}`);
    });
  });

  it("should display numbers when buttons are pressed", () => {
    const calculation = "123 + 321";
    cy.typeCalculation(calculation);
    cy.contains("div", calculation);
  });
});
context("Calculation Test", () => {
  it("should display result for given calculation", () => {
    cy.visit("/");
    cy.typeCalculation("100 + 100 =");
    cy.contains("div", "200");
  });

  it("should display result for given calculation", () => {
    cy.visit("/");
    cy.typeCalculation("100 × 2 =");
    cy.contains("div", "200");
  });
  it("should display result for given calculation", () => {
    cy.visit("/");
    cy.typeCalculation("100 ÷ 2 =");
    cy.contains("div", "50");
  });

  it("should display result for given calculation", () => {
    cy.visit("/");
    cy.typeCalculation("100 + 100 +");
    cy.typeCalculation("× 2 =");

    cy.contains("div", "400");
  });
});
