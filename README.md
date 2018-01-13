# The Childrens Journey

## Run
All work should be done on the develop branch (or a feature branch that is then merged into develop). The master branch is strictly for publishing this `dist` folder.

```
$ git checkout develop
```

```
$ npm install
```

```
$ npm run start
```
The app will run at http://localhost:3300


## Making changes
Changes will automatically be applied. Just refresh your browser window.

## Commit your Changes

Add you files
```
$ git add .
```

```
$ git commit -m "Message explaining the changes"
```

```
$ git push
```

## Publish
When you want to make your changes live in production.

This moves all necessary files to the master branch for GitHub Pages.

```
$ npm run publish
```


## Tech Stack

* Templates: [Pug](https://pugjs.org/api/getting-started.html)
* Css: [Sass](http://sass-lang.com/)
* Scripts: [jQuery](https://jquery.com/)
* Build: [NPM Scripts](https://docs.npmjs.com/misc/scripts)
* Publish [GitHub Pages](https://pages.github.com/)
