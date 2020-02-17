describe('Main setup', () => {
    it('Renders the app with a loading view, and fetches results from SpaceX API', () => {
        cy.visit('http://localhost:3000/');

        cy.get('h1').contains('SpaceX Launches');

        cy.contains('Launching...');
        cy.get('.Filter')
            .not()
            .should('be.visible');

        cy.request('https://api.spacexdata.com/v3/launches').should(resp => {
            expect(resp.status).to.eq(200);
        });
    });

    it('Refreshes results', () => {
        cy.get('#RefreshButton').click();

        cy.contains('Relaunching...');
    });

    it('Toggles filter checkboxes', () => {
        cy.visit('http://localhost:3000/');

        cy.request('https://api.spacexdata.com/v3/launches').should(resp => {
            cy.get('tbody tr').should('have.length', resp.body.length);

            // Filter 1
            cy.get('.Filter')
                .eq(0)
                .click()
                .find('svg')
                .should('be.visible');

            cy.get('tbody tr').should('not.have.length', resp.body.length);

            cy.get('.Filter')
                .eq(0)
                .click()
                .find('svg')
                .should('not.be.visible');

            cy.get('tbody tr').should('have.length', resp.body.length);

            // Filter 2
            cy.get('.Filter')
                .eq(1)
                .click()
                .find('svg')
                .should('be.visible');

            cy.get('tbody tr').should('not.have.length', resp.body.length);

            cy.get('.Filter')
                .eq(1)
                .click()
                .find('svg')
                .should('not.be.visible');

            // Filter 3
            cy.get('.Filter')
                .eq(2)
                .click()
                .find('svg')
                .should('be.visible');

            cy.get('tbody tr').should('not.have.length', resp.body.length);

            cy.get('.Filter')
                .eq(2)
                .click()
                .find('svg')
                .should('not.be.visible');

            // TODO: Check individual rows for filter match
        });
    });
});
