# ⚛ React Mobile App Boilerplate for Meteor ☄

###Technologies Used

* Meteor
* [Meteor Mocha](https://github.com/practicalmeteor/meteor-mocha) For Testing
* AccountsUI
* React
* react-addons-pure-render-mixin
* react-dom
* classnames


###Getting Started 🔥

First, Install [Meteor](https://www.meteor.com/install).

Then do the following:
```shell
git clone https://github.com/dannyvassallo/meteor.react.mobile.boiler.git
cd meteor.react.mobile.boiler
meteor npm install
meteor run
```

###Testing 🎓

```shell
npm run test
#when you see => App running at: http://localhost:8080/
#visit localhost:8080 in a browser to invoke testing
```

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
