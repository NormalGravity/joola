var
  async = require('async');

describe("apitokens", function () {
  before(function (done) {
    var self = this;
    this.uid = joola.common.uuid();

    joola.set('APIToken', 'apitoken-demo', function () {
      self.workspace = {
        key: 'test-org-apitoken-' + self.uid,
        name: 'test-org-apitoken-' + self.uid
      };
      self.role = {
        key: 'test-user-role-' + self.uid,
        permissions: ['access_system', 'system:version']
      };
      self.user = {
        username: 'test-user-' + self.uid,
        password: 'password',
        workspace: self.workspace.key,
        roles: ['test-user-role-' + self.uid],
        APIToken: 'user-' + self.uid
      };
      var calls = [];

      calls.push(function (callback) {
        joola.workspaces.add(self.workspace, callback);
      });
      calls.push(function (callback) {
        joola.roles.add(self.workspace.key, self.role, callback);
      });
      calls.push(function (callback) {
        joola.users.add(self.workspace.key, self.user, callback);
      });
      async.series(calls, done);
    });
  });

  it("should be able to use a newly created APIToken", function (done) {
    var self = this;

    joola.set('APIToken', 'user-' + self.uid, function () {
      joola.system.version(done);
    });
  });

  after(function (done) {
    joola.set('APIToken', 'apitoken-demo', done);
  });

});
