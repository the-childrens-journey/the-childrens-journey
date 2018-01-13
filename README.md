# The Childrens Journey

## Run
All work should be done on the develop branch. The master branch is strictly for publishing this `dist` folder.

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

```
$ git commit -m "Message explaingin the changes that were made"
```

```
$ git push
```

## Publish
When you want to make your changes live in production.

Apply your changes to the master branch

```
$ git checkout master
```

```
$ git merge develop
```

Push your changes

```
$ git push
```

Publish your changes

```
$ npm run publish
```
