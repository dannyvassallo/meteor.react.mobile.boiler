/* eslint-env mocha */
import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert, expect } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

      beforeEach(() => {
        resetDatabase();
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
          private: true
        });
      });

      it('can delete owned task', function() {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteTask.apply(invocation, [taskId]);

        // Verify that the method does what we expected
        var count = Tasks.find().count();
        console.log("Tasks count is " + count + " should be 0");
        var assertion = assert.equal(count, 0);

        return assertion;

      });

      it('cannot delete unowned task', function() {
        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];
        // //
        // // const invocation =  Random.id();
        // // Run the method with `this` set to the fake invocation
        function attemptDeletion(){
          deleteTask.apply(Random.id(), [taskId]);
        }

        // Verify that the method does what we expected
        var count = Tasks.find().count();
        console.log("Tasks count is " + count + " should be 1");
        var assertion = expect(attemptDeletion).to.throw(Error);

        return assertion;

      });

    });
  });
}
