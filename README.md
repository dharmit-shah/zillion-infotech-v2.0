sass steps:
-----------
Install: npm install node-sass

open package.json and add:
"scripts": {
    "watch:sass": "node-sass -w assets/scss/ -o assets/css/"
}

run command: npm run watch:sass (At the bottom of right side you will see a "Watch sass", Click on it; it will watch every CSS files )
