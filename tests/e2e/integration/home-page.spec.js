describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('metadata is displayed correctly', () => {
        // check for the name 'Coming to Germany...' in hero, menu and page title
        cy.get('.navbar-brand').contains('Coming to Germany...');
        cy.title().should('eq', 'Coming to Germany...')
        cy.get('.col-12 > .title').contains('German Immigration');
    });

    it('About section appears when in view', () => {
        cy.get('.container-fluid > .title').should('not.be.visible');
        cy.get('.container-fluid > .title').scrollIntoView().should('be.visible');
    });

    it('blog section appears when in view', () => {
        cy.get('.blog-item').should('not.exist');
        cy.get('.blog-item > .row').scrollIntoView();
        cy.get('.blog-item').should('exist');
    });

    it('check all links in footer are clickable', () => {
        // LinkedIn
        // cy.get('[href="https://www.linkedin.com/in/cody-griffith-8771a8145/"]').then(link => {
        //     cy
        //         .request(link.prop('href'))
        //         .its('status')
        //         .should('eq', 200);

        // });
        // Github
        cy.get('[href="https://github.com/Mathnstein"]').then(link => {
            cy
                .request(link.prop('href'))
                .its('status')
                .should('eq', 200);

        });
        // Facebook
        cy.get('[href="https://www.facebook.com/cody.griffith.10"]').then(link => {
            cy
                .request(link.prop('href'))
                .its('status')
                .should('eq', 200);

        });
        // Portfolio
        cy.get('[href="https://Mathnstein.github.io"]').then(link => {
            cy
                .request(link.prop('href'))
                .its('status')
                .should('eq', 200);

        });
    });

    it('check resizing works as expected', () => {
        cy.viewport('iphone-6'); // 375 by 667

        //  Toggler should appear
        cy.get('.navbar-toggler').should('exist');

        // Clicking toggler should display children
        cy.get('.nav-link').should('not.be.visible');
        cy.get('.navbar-toggler').click().wait(500);
        cy.get('.nav-link').should('be.visible');

        // Clicking again should remove children
        cy.get('.navbar-toggler').click().wait(500);
        cy.get('.nav-link').should('not.be.visible');

        // Check blogs are now stacking by checking the image is at least the screen size of the device
        cy.get('.blog-item-image').scrollIntoView().invoke('width').should('be.greaterThan', 374);
    });
});