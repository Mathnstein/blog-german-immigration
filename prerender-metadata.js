console.log('Begin prerender of HTML pages');
const { metadata } = require('./src/metadata');


const fs = require('fs');
const path = require('path');
const indexFilePath = path.resolve(__dirname, './', 'dist', 'angular-blog', 'index.html');

// read in the index.html file
fs.readFile(indexFilePath, 'utf8', function (err, data) {
    console.log('Read in index.html');

    if (err) {
        return console.error(err);
    }

    metadata.forEach(({ url, title, description, image }) => {
        let result = data;
        result = result.replace(/\$OG_TITLE/g, title);
        result = result.replace(/\$OG_DESCRIPTION/g, description);
        result = result.replace(/\$OG_IMAGE/g, '/assets/img/' + image);
        // result = result.replace(/\$CANONICAL_URL/g, canonical_url);
        let filename = url.substring(1).replace(/\//g, '-');
        if (filename.length) {
            filename = filename + '.html';
        } else {
            filename = 'index.html';
        }
        fs.writeFile(path.resolve(__dirname, './', 'dist', 'angular-blog', filename), result, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Saved ' + filename);
            }
        });
    })

});