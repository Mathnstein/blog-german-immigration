const assetRoute: string = '/assets/img/';

export const allBlogs: any = {
    PreFlightChecks: {
        title: 'Pre-Flight Checks',
        content: [ 'My Story', 'Helpful Resources' ],
        image: assetRoute + 'Airplane.jpg',
        publishedOn: new Date( '2021-11-24' ),
        readTime: '10 minutes',
        likes: 0,
        url: '/pre-flight-checks'
    },
    PersonalImmigration: {
        title: 'Personal Immigration',
        content: [ 'My Story', 'Helpful Resources' ],
        image: assetRoute + 'Koeln-Brueke.jpg',
        publishedOn: new Date( '2021-11-10' ),
        lastEditedOn: new Date( '2021-11-23' ),
        readTime: '15 minutes',
        likes: 17,
        url: '/personal-immigration'
    },
    Home: {
        title: 'Coming to Germany...',
        content: 'A resource hub to immigration from someone who just did it.',
        image: assetRoute + 'German-Flag.jpg',
        url: '/'
    },
};

