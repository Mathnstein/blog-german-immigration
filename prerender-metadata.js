console.log('Begin prerender of HTML pages');
const { allBlogs } = require('./src/allBlogs');
// console.log(allBlogs)

const fs = require('fs');
const path = require('path');
const indexFilePath = path.resolve(__dirname, './', 'dist', 'angular-blog', 'index.html');

// read in the index.html file
fs.readFile(indexFilePath, 'utf8', function (err, data) {
    console.log('Read in index.html');

    if (err) {
        return console.error(err);
    }

    for (const [key, val] of Object.entries(allBlogs)) {
        let result = data;
        let folder = val.url.substring(1).replace(/\//g, '-');

        if (folder) {
            description = val.content.join(', ');
            fs.mkdir(path.join(__dirname, './', 'dist', 'angular-blog', folder), (err) => {
                if (err) {
                    // console.error(err);
                }
            });
        } else {
            description = val.content;
        };

        result = result.replace(/\$OG_TITLE/g, val.title);
        result = result.replace(/\$OG_DESCRIPTION/g, description);
        result = result.replace(/\$OG_IMAGE/g, val.image);

        fs.writeFile(path.resolve(__dirname, './', 'dist', 'angular-blog', folder, 'index.html'), result, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Saved ' + folder + '/index.html');
            };
        });
    };
});