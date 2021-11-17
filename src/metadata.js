const Routes = {
    Home: '/',
    PersonalImmigration: '/personal-immigration'
}

const metadata = [
    {
        url: Routes.Home,
        title: 'Coming to Germany...',
        description: 'A resource hub to immigration from someone who just did it.',
        image: 'German-Flag.jpg'
    },
    {
        url: Routes.PersonalImmigration,
        title: 'Personal Immigration',
        description: 'My Story, Helpful Resources',
        image: 'Koeln-Brueke.jpg'
    }
];

const get = (route) => {
    const data = metadata.find(({ url }) => url === route);
    if (data) {
        return data;
    } else {
        return {
            url: route,
            title: 'Harvard Growth Lab Viz Hub | ',
            description: '',
            image: '',
        }
    }
}

module.exports = {
    metadata,
    Routes,
    get,
};