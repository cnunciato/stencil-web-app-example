describe('The application', () => {

  describe('home page', () => {

    beforeEach(() => {
      cy.server();

      cy.route({
        method: 'GET',
        url: '/posts',
        response: [
          {
            "id": 1000,
            "title": "My First Post",
            "date": "2018-10-15T18:25:43.511Z",
            "body": "It was a <em>dark</em> and <em>stormy</em> night..."
          },
          {
            "id": 1001,
            "title": "My Second Post",
            "date": "2018-10-15T18:25:43.511Z",
            "body": "It was a <em>darker</em> and <em><b>stormier</b></em> night..."
          },
          {
            "id": 1002,
            "title": "My Third Post",
            "date": "2018-10-15T18:25:43.511Z",
            "body": "It was a <em>super-dark</em> and <em><b>super-stormy</b></em> night..."
          }
        ]
      });

      cy.visit('/');
    });

    it('renders a list of posts', () => {
      cy.get('app-posts ol li').should('have.length', 3);
    });

    describe('when a post is clicked', () => {

      beforeEach(() => {

        cy.route({
          method: 'GET',
          url: '/posts/1001',
          response: {
            "id": 1001,
            "title": "My Second Post",
            "date": "2018-10-15T18:25:43.511Z",
            "body": "It was a <em>darker</em> and <em><b>stormier</b></em> night..."
          }
        });

        cy.get('app-posts ol li:nth-child(2) h2 a').click();
      });

      it ('navigates to the post', () => {
        cy.url().should('include', '/posts/1001');
      });

      it('renders the post', () => {
        cy.get('app-post h1').should('have.text', 'My Second Post');
      });
    });
  });

  describe('routing', () => {

    describe('when the requested route does not exist', () => {

      beforeEach(() => {
        cy.visit('/ohnoes');
      });

      it('renders the not-found view', () => {
        cy.get('app-not-found h1').should('have.text', 'Doh!');
      });
    });
  });

  describe('header', () => {

    beforeEach(() => {
      cy.visit('/posts/1000');
    });

    it('links back to the home page', () => {
      cy.get('header h1 a').click();
      cy.url().should('eq', 'http://localhost:3333/');
    });
  });
});
