[![Build Status](https://travis-ci.org/dannyvassallo/meteor.react.mobile.boiler.svg?branch=master)](https://travis-ci.org/dannyvassallo/meteor.react.mobile.boiler)

# ⚛ React Mobile App Boilerplate for Meteor ☄

A meteor app preset with React as the view layer with  deployment &  mobile app instructions.

###Technologies Used 🤖

* Meteor
* [Meteor Mocha](https://github.com/practicalmeteor/meteor-mocha) For Testing
* AccountsUI
* SCSS
* React
* react-addons-pure-render-mixin
* react-dom
* classnames
* react-router
* flexboxgrid
* material-ui

###Getting Started 🔥

First, Install [Meteor](https://www.meteor.com/install).

Then do the following:
```shell
#on windows you may need powershell if you
#run into issues with gitbash and meteor
git clone https://github.com/dannyvassallo/meteor.react.mobile.boiler.git
cd meteor.react.mobile.boiler
meteor npm install
meteor run
```

###File & Folder Structure

```shell
  |-- .gitignore
  |-- README.md
  |-- package.json
  |-- .meteor
  |-- client
  |   |-- main.html #render target
  |   |-- main.jsx #imports html and startup
  |   |-- main.scss #use custom scss here
  |-- imports
  |   |-- api
  |   |   |-- #your serverside methods & tests go here myfile.tests.js
  |   |-- startup
  |   |   |-- client
  |   |       |-- index.js #imports routes and accounts config
  |   |       |-- routes.jsx #edit routes here
  |   |       |-- accounts-config.js #edit accounts ui configuration here
  |   |-- ui
  |       |-- components
  |       |   |-- #your components go here
  |       |-- containers
  |       |   |-- #containers w/ meteor data go here
  |       |-- layouts
  |       |   |-- #the apps layouts go here
  |       |-- pages
  |           |-- #Put your page components here
  |-- server
      |-- main.js #imports from api
```

###Running tests ✅

On first run pass the terminal `npm run prep-test`
every other time just run `npm run test`

If prep test fails run `sudo npm i spacejam -g`

If you need to pass additional parameters to spacejam, edit the `package.json` or alter this command line chain:

```shell
#we use 8080 to run the tests concurrently with our server instance on 3000
TEST_WATCH=1 spacejam test --driver-package practicalmeteor:mocha --port 8080
```

###Material-UI

Material-UI is a set of React components that implement Google's Material Design.

You can checkout components and their markup here: http://www.material-ui.com/

###flexboxgrid

flexboxgrid is a grid system based on the flex display property. The markup is identical to Twitter bootstrap in most cases. See the examples here: http://flexboxgrid.com/

###Deployment 🚀

Deploy using the [Meteor Horse Buildpack](https://github.com/AdmitHub/meteor-buildpack-horse) and Heroku


* Set up your app to [deploy to heroku with git](https://devcenter.heroku.com/articles/git).
*  Set this repository as the buildpack URL:
```
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
```
* Add the MongoLab addon:
```
heroku addons:create mongolab
```
* Set the `ROOT_URL` environment variable. This is required for bundling and running the app.  Either define it explicitly, or enable the [Dyno Metadata](https://devcenter.heroku.com/articles/dyno-metadata) labs addon to default to `https://<appname>.herokuapp.com`.
```
heroku config:set ROOT_URL="https://<appname>.herokuapp.com" # or other URL
```
Once that's done, you can deploy your app using this build pack any time by pushing to heroku:
```
git push heroku master
```

###Sync your local settings w/ Heroku 🔄
```
heroku config:add METEOR_SETTINGS="$(cat settings.json)"
```

###Running on android 📱

In the shell with your device connected run:

```
MONGO_URL="mongodb://<username>:<password>@<mlab url>.mlab.com:<portnumber>/<dbname>" meteor run android-device --mobile-server=https://<appname>.herokuapp.com
```
###Generating Icons and splashes 🖌

Use meteor image asset generator [here](https://github.com/lpender/meteor-assets).

Follow the instructions and copy the resulting resources folder over the one in this project.
