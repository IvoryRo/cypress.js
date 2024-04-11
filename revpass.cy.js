describe('Password Recovery Test', () => {
  it('Successfully sends password recovery email', () => {
    cy.visit('https://login.qa.studio/forgot-password');

    cy.get('#E-mail').type('USER_LOGIN');

    // Submit the password recovery form
    cy.get('button[type="Отправить код"]').click();

    // Wait for the password recovery confirmation message
    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
  });
});