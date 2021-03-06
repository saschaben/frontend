import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  i18n: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  model: function(params) {
    var self = this;
    var defer = Ember.RSVP.defer();

    Ember.run.later(defer.resolve, function() {
      var resolve = this;
      self.get('currentUser.model').then(function(currentUser){
        var schoolId = params.schoolId == null ? currentUser.get('primarySchool.id') : params.schoolId;
        self.store.find('school', schoolId).then(function(school){
          self.store.find('instructorGroup', {
            filters: {
              school: school.get('id')
            },
            limit: 500
          }).then(function(instructorGroups){
            currentUser.get('schools').then(function(schools){
              resolve({
                school: school,
                schools: schools,
                instructorGroups: instructorGroups
              });
            });
          });
        });
      });
    }, 500);

    return defer.promise;
  },
  setupController: function(controller, hash){
    var self = this;
    Ember.run.later(function(){
      if(!controller.get('isDestroyed')){
        controller.set('model', hash.instructorGroups);
        controller.set('schools', hash.schools);
        controller.set('selectedSchool', hash.school);
        self.controllerFor('application').set('pageTitle', self.get('i18n').t('navigation.instructorGroups'));
      }
    });
  },
  queryParams: {
    filter: {
      replace: true
    },
    school: {
      refreshModel: true
    }
  }
});
