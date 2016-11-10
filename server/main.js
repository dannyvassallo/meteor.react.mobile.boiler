import '../imports/api/tasks.js';

Meteor.startup(() => {
  // create admin from settings
  if (Meteor.users.findOne(Meteor.settings.adminId)){
    Roles.addUsersToRoles(Meteor.settings.adminId, ['admin']);
  }

  Meteor.publish("userData", function () {
    if (this.userId) {
      return Meteor.users.find({_id: this.userId});
    } else {
      this.ready();
    }
  });

});
