describe('templat spec', () => {
  it('passes', () => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.contains('a', 'Cadastrar').click();
      cy.get('input[name="name"]').type('KS');
      cy.get('input[name="email"]').type('ks@email.com');
      cy.get('input[name="password"]').type('Senha123');
      cy.get('input[name="confirm_password"]').type('Senha123');
      cy.contains('button', 'Cadastrar').click();
   })
})