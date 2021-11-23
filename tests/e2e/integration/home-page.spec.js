describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });

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
        cy.get('.socials').scrollIntoView().children().each(($a) => {
            // Check each link has a valid endpoint
            cy.wrap($a).invoke('attr', 'href').then(href => {
                if (!href.includes('linkedin')) {
                    //  Filter out linkin, they have a weird http request protocol
                    cy.request(href).wait(500).its('status').should('eq', 200);
                }
            });
            // Check each link hovers correctly
            cy.wrap($a).realHover().wait(1000).should('have.css', 'opacity').then((val) => {
                cy.wrap(Number(val)).should('be.lt', 1)
            });
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
        cy.get('.blog-item-image').scrollIntoView().invoke('width').should('be.gte', 375);
    });
});

describe('Personal Immigration', () => {
    beforeEach(() => {
        cy.visit('/personal-immigration/').wait(1500);
    });

    it('metadata is displayed correctly', () => {
        // check for the name 'Coming to Germany...' in hero, menu and page title
        cy.title().should('eq', 'Personal Immigration')
        cy.get('#hero > .title').contains('Personal Immigration');
    });

    it('like button works as expected', () => {
        let currentCount;
        let newCount;
        cy.scrollTo('bottom');
        // Count shows up
        cy.get('.count').then((val) => {
            currentCount = Number(val.text());
            cy.wrap(currentCount).should('be.gte', 0);
        });

        // Check adding a like works
        cy.get('.heart').click().wait(1000).should('have.css', 'color', 'rgb(255, 0, 0)');
        cy.get('.count').then((val) => {
            newCount = Number(val.text());
            cy.wrap(newCount).should('be.eq', currentCount + 1);
        });

        // Check removing a like works
        cy.get('.heart').click().wait(1000).should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get('.count').then((val) => {
            newCount = Number(val.text());
            cy.wrap(newCount).should('be.eq', currentCount);
        });

    });
});