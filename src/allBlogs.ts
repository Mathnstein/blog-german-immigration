const assetRoute: string = '/assets/img/';

export const allBlogs: any = {
    Home: {
        title: 'Coming to Germany...',
        content: 'A resource hub to immigration from someone who just did it.',
        image: assetRoute + 'German-Flag.jpg',
        url: '/'
    },
    PersonalImmigration: {
        title: 'Personal Immigration',
        content: [ 'My Story', 'Helpful Resources' ],
        image: assetRoute + 'Koeln-Brueke.jpg',
        publishedOn: new Date( '2021-11-10' ),
        readTime: '10 minutes',
        likes: 0,
        url: '/personal-immigration'
    }
};

