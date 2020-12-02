import { getGreeting } from '../support/app.po';

describe('vtr', () => {
  beforeEach(() => cy.visit('/'));

  it('Validate the status code of Directus API', () => {
    cy.request(
      'https://directus.projects.prodaptconsulting.com/directus/items/basic_pages/1'
    )
      .its('status')
      .should('equal', 200);
  });
});
