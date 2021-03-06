/* global moment */
import getAll from './helpers/get-all';
import Mirage from 'ember-cli-mirage';

export default function() {
    this.timing = 100;
    
    this.pretender.post.call(this.pretender, '/write-blanket-coverage', this.pretender.passthrough);
    this.get('/api/aamcmethods', getAll);
    this.get('/api/aamcmethods/:id', 'aamcMethod');
    this.put('/api/aamcmethods/:id', 'aamcMethod');
    this.delete('/api/aamcmethods/:id', 'aamcMethod');
    this.post('/api/aamcmethods', 'aamcMethod');

    this.get('/api/aamcpcrs', getAll);
    this.get('/api/aamcpcrs/:id', 'aamcPcr');
    this.put('/api/aamcpcrs/:id', 'aamcPcr');
    this.delete('/api/aamcpcrs/:id', 'aamcPcr');
    this.post('/api/aamcpcrs', 'aamcPcr');

    this.get('/api/alertchangetypes', getAll);
    this.get('/api/alertchangetypes/:id', 'alertChangeType');
    this.put('/api/alertchangetypes/:id', 'alertChangeType');
    this.delete('/api/alertchangetypes/:id', 'alertChangeType');
    this.post('/api/alertchangetypes', 'alertChangeType');

    this.get('/api/alerts', getAll);
    this.get('/api/alerts/:id', 'alert');
    this.put('/api/alerts/:id', 'alert');
    this.delete('/api/alerts/:id', 'alert');
    this.post('/api/alerts', 'alert');

    this.get('/api/cohorts', getAll);
    this.get('/api/cohorts/:id', 'cohort');
    this.put('/api/cohorts/:id', 'cohort');
    this.delete('/api/cohorts/:id', 'cohort');
    this.post('/api/cohorts', 'cohort');

    this.get('/api/competencies', getAll);
    this.get('/api/competencies/:id', 'competency');
    this.put('/api/competencies/:id', 'competency');
    this.delete('/api/competencies/:id', 'competency');
    this.post('/api/competencies', 'competency');

    this.get('/api/courseclerkshiptypes', getAll);
    this.get('/api/courseclerkshiptypes/:id', 'courseClerkshipType');
    this.put('/api/courseclerkshiptypes/:id', 'courseClerkshipType');
    this.delete('/api/courseclerkshiptypes/:id', 'courseClerkshipType');
    this.post('/api/courseclerkshiptypes', 'courseClerkshipType');

    this.get('/api/courselearningmaterials', getAll);
    this.get('/api/courselearningmaterials/:id', 'courseLearningMaterial');
    this.put('/api/courselearningmaterials/:id', 'courseLearningMaterial');
    this.delete('/api/courselearningmaterials/:id', 'courseLearningMaterial');
    this.post('/api/courselearningmaterials', 'courseLearningMaterial');

    this.get('/api/courses', getAll);
    this.get('/api/courses/:id', 'course');
    this.put('/api/courses/:id', 'course');
    this.delete('/api/courses/:id', 'course');
    this.post('/api/courses', 'course');

    this.get('/api/curriculuminventoryacademiclevels', getAll);
    this.get('/api/curriculuminventoryacademiclevels/:id', 'curriculumInventoryAcademicLevel');
    this.put('/api/curriculuminventoryacademiclevels/:id', 'curriculumInventoryAcademicLevel');
    this.delete('/api/curriculuminventoryacademiclevels/:id', 'curriculumInventoryAcademicLevel');
    this.post('/api/curriculuminventoryacademiclevels', 'curriculumInventoryAcademicLevel');

    this.get('/api/curriculuminventoryexports', getAll);
    this.get('/api/curriculuminventoryexports/:id', 'curriculumInventoryExport');
    this.put('/api/curriculuminventoryexports/:id', 'curriculumInventoryExport');
    this.delete('/api/curriculuminventoryexports/:id', 'curriculumInventoryExport');
    this.post('/api/curriculuminventoryexports', 'curriculumInventoryExport');

    this.get('/api/curriculuminventoryinstitutions', getAll);
    this.get('/api/curriculuminventoryinstitutions/:id', 'curriculumInventoryInstitution');
    this.put('/api/curriculuminventoryinstitutions/:id', 'curriculumInventoryInstitution');
    this.delete('/api/curriculuminventoryinstitutions/:id', 'curriculumInventoryInstitution');
    this.post('/api/curriculuminventoryinstitutions', 'curriculumInventoryInstitution');

    this.get('/api/curriculuminventoryreports', getAll);
    this.get('/api/curriculuminventoryreports/:id', 'curriculumInventoryReport');
    this.put('/api/curriculuminventoryreports/:id', 'curriculumInventoryReport');
    this.delete('/api/curriculuminventoryreports/:id', 'curriculumInventoryReport');
    this.post('/api/curriculuminventoryreports', 'curriculumInventoryReport');

    this.get('/api/curriculuminventorysequenceblocks', getAll);
    this.get('/api/curriculuminventorysequenceblocks/:id', 'curriculumInventorySequenceBlock');
    this.put('/api/curriculuminventorysequenceblocks/:id', 'curriculumInventorySequenceBlock');
    this.delete('/api/curriculuminventorysequenceblocks/:id', 'curriculumInventorySequenceBlock');
    this.post('/api/curriculuminventorysequenceblocks', 'curriculumInventorySequenceBlock');

    this.get('/api/curriculuminventorysequences', getAll);
    this.get('/api/curriculuminventorysequences/:id', 'curriculumInventorySequence');
    this.put('/api/curriculuminventorysequences/:id', 'curriculumInventorySequence');
    this.delete('/api/curriculuminventorysequences/:id', 'curriculumInventorySequence');
    this.post('/api/curriculuminventorysequences', 'curriculumInventorySequence');

    this.get('/api/departments', getAll);
    this.get('/api/departments/:id', 'department');
    this.put('/api/departments/:id', 'department');
    this.delete('/api/departments/:id', 'department');
    this.post('/api/departments', 'department');

    this.get('/api/disciplines', getAll);
    this.get('/api/disciplines/:id', 'discipline');
    this.put('/api/disciplines/:id', 'discipline');
    this.delete('/api/disciplines/:id', 'discipline');
    this.post('/api/disciplines', 'discipline');

    this.get('/api/educationalyears', getAll);
    this.get('/api/educationalyears/:id', 'educationalYear');
    this.put('/api/educationalyears/:id', 'educationalYear');
    this.delete('/api/educationalyears/:id', 'educationalYear');
    this.post('/api/educationalyears', 'educationalYear');

    this.get('/api/ilmsessions', getAll);
    this.get('/api/ilmsessions/:id', 'ilmSession');
    this.put('/api/ilmsessions/:id', 'ilmSession');
    this.delete('/api/ilmsessions/:id', 'ilmSession');
    this.post('/api/ilmsessions', 'ilmSession');

    this.get('/api/instructionhours', getAll);
    this.get('/api/instructionhours/:id', 'instructionHour');
    this.put('/api/instructionhours/:id', 'instructionHour');
    this.delete('/api/instructionhours/:id', 'instructionHour');
    this.post('/api/instructionhours', 'instructionHour');

    this.get('/api/instructorgroups', getAll);
    this.get('/api/instructorgroups/:id', 'instructorGroup');
    this.put('/api/instructorgroups/:id', 'instructorGroup');
    this.delete('/api/instructorgroups/:id', 'instructorGroup');
    this.post('/api/instructorgroups', 'instructorGroup');

    this.get('/api/learnergroups', getAll);
    this.get('/api/learnergroups/:id', 'learnerGroup');
    this.put('/api/learnergroups/:id', 'learnerGroup');
    this.delete('/api/learnergroups/:id', 'learnerGroup');
    this.post('/api/learnergroups', 'learnerGroup');

    this.get('/api/learningmaterialstatuses', getAll);
    this.get('/api/learningmaterialstatuses/:id', 'learningMaterialStatus');
    this.put('/api/learningmaterialstatuses/:id', 'learningMaterialStatus');
    this.delete('/api/learningmaterialstatuses/:id', 'learningMaterialStatus');
    this.post('/api/learningmaterialstatuses', 'learningMaterialStatus');

    this.get('/api/learningmaterialuserroles', getAll);
    this.get('/api/learningmaterialuserroles/:id', 'learningMaterialUserRole');
    this.put('/api/learningmaterialuserroles/:id', 'learningMaterialUserRole');
    this.delete('/api/learningmaterialuserroles/:id', 'learningMaterialUserRole');
    this.post('/api/learningmaterialuserroles', 'learningMaterialUserRole');

    this.get('/api/learningmaterials', getAll);
    this.get('/api/learningmaterials/:id', 'learningMaterial');
    this.put('/api/learningmaterials/:id', 'learningMaterial');
    this.delete('/api/learningmaterials/:id', 'learningMaterial');
    this.post('/api/learningmaterials', 'learningMaterial');

    this.get('/api/meshconcepts', getAll);
    this.get('/api/meshconcepts/:id', 'meshConcept');
    this.put('/api/meshconcepts/:id', 'meshConcept');
    this.delete('/api/meshconcepts/:id', 'meshConcept');
    this.post('/api/meshconcepts', 'meshConcept');

    this.get('/api/meshdescriptors', getAll);
    this.get('/api/meshdescriptors/:id', 'meshDescriptor');
    this.put('/api/meshdescriptors/:id', 'meshDescriptor');
    this.delete('/api/meshdescriptors/:id', 'meshDescriptor');
    this.post('/api/meshdescriptors', 'meshDescriptor');

    this.get('/api/meshqualifiers', getAll);
    this.get('/api/meshqualifiers/:id', 'meshQualifier');
    this.put('/api/meshqualifiers/:id', 'meshQualifier');
    this.delete('/api/meshqualifiers/:id', 'meshQualifier');
    this.post('/api/meshqualifiers', 'meshQualifier');

    this.get('/api/objectives', getAll);
    this.get('/api/objectives/:id', 'objective');
    this.put('/api/objectives/:id', 'objective');
    this.delete('/api/objectives/:id', 'objective');
    this.post('/api/objectives', 'objective');

    this.get('/api/offerings', getAll);
    this.get('/api/offerings/:id', 'offering');
    this.put('/api/offerings/:id', 'offering');
    this.delete('/api/offerings/:id', 'offering');
    this.post('/api/offerings', 'offering');

    this.get('/api/programyears', getAll);
    this.get('/api/programyears/:id', 'programYear');
    this.put('/api/programyears/:id', 'programYear');
    this.delete('/api/programyears/:id', 'programYear');
    this.post('/api/programyears', 'programYear');

    this.get('/api/programyearstewards', getAll);
    this.get('/api/programyearstewards/:id', 'programYearSteward');
    this.put('/api/programyearstewards/:id', 'programYearSteward');
    this.delete('/api/programyearstewards/:id', 'programYearSteward');
    this.post('/api/programyearstewards', 'programYearSteward');

    this.get('/api/programs', getAll);
    this.get('/api/programs/:id', 'program');
    this.put('/api/programs/:id', 'program');
    this.delete('/api/programs/:id', 'program');
    this.post('/api/programs', 'program');

    this.get('/api/publishevents', getAll);
    this.get('/api/publishevents/:id', 'publishEvent');
    this.put('/api/publishevents/:id', 'publishEvent');
    this.delete('/api/publishevents/:id', 'publishEvent');
    this.post('/api/publishevents', 'publishEvent');

    this.get('/api/recurringevents', getAll);
    this.get('/api/recurringevents/:id', 'recurringEvent');
    this.put('/api/recurringevents/:id', 'recurringEvent');
    this.delete('/api/recurringevents/:id', 'recurringEvent');
    this.post('/api/recurringevents', 'recurringEvent');

    this.get('/api/reports', getAll);
    this.get('/api/reports/:id', 'report');
    this.put('/api/reports/:id', 'report');
    this.delete('/api/reports/:id', 'report');
    this.post('/api/reports', 'report');

    this.get('/api/schools', getAll);
    this.get('/api/schools/:id', 'school');
    this.put('/api/schools/:id', 'school');
    this.delete('/api/schools/:id', 'school');
    this.post('/api/schools', 'school');

    this.get('/api/sessiondescriptions', getAll);
    this.get('/api/sessiondescriptions/:id', 'sessionDescription');
    this.put('/api/sessiondescriptions/:id', 'sessionDescription');
    this.delete('/api/sessiondescriptions/:id', 'sessionDescription');
    this.post('/api/sessiondescriptions', 'sessionDescription');

    this.get('/api/sessionlearningmaterials', getAll);
    this.get('/api/sessionlearningmaterials/:id', 'sessionLearningMaterial');
    this.put('/api/sessionlearningmaterials/:id', 'sessionLearningMaterial');
    this.delete('/api/sessionlearningmaterials/:id', 'sessionLearningMaterial');
    this.post('/api/sessionlearningmaterials', 'sessionLearningMaterial');

    this.get('/api/sessiontypes', getAll);
    this.get('/api/sessiontypes/:id', 'sessionType');
    this.put('/api/sessiontypes/:id', 'sessionType');
    this.delete('/api/sessiontypes/:id', 'sessionType');
    this.post('/api/sessiontypes', 'sessionType');

    this.get('/api/sessions', getAll);
    this.get('/api/sessions/:id', 'session');
    this.put('/api/sessions/:id', 'session');
    this.delete('/api/sessions/:id', 'session');
    this.post('/api/sessions', 'session');

    this.get('/api/userroles', getAll);
    this.get('/api/userroles/:id', 'userRole');
    this.put('/api/userroles/:id', 'userRole');
    this.delete('/api/userroles/:id', 'userRole');
    this.post('/api/userroles', 'userRole');

    this.get('/api/users', getAll);
    this.get('/api/users/:id', 'user');
    this.put('/api/users/:id', 'user');
    this.delete('/api/users/:id', 'user');
    this.post('/api/users', 'user');

    this.get('/api/userevents/4136', function(db) {
      return {
        userEvents: db.userevents
      };
    });

    this.post('/auth/login', function(db, request) {
      let errors = [];
      var attrs = JSON.parse(request.requestBody);
      if(!('username' in attrs) || !attrs.username){
        errors.push('Username required');
      }
      if(!('password' in attrs) || !attrs.password){
        errors.push('Password required');
      }
      let username = attrs.username.toLowerCase();
      if(errors.length === 0){
        if(username === 'demo' && attrs.password === 'demo'){
          let now = moment();
          let nextWeek = now.clone().add(1, 'week');
          let header = '{"alg":"none"}';
          let body = `{"iss": "ilios","aud": "ilios","iat": "${now.format('X')}","exp": "${nextWeek.format('X')}","user_id": 4136}`;

          let encodedData =  window.btoa(header) + '.' +  window.btoa(body) + '.';
          return {
            jwt: encodedData
          };
        } else {
          errors.push('Incorrect username or password');
        }
      }
      return new Mirage.Response(400, {}, {errors: errors});
    });

    this.get('/auth/whoami', function() {
      return {
        userId: 4136
      };
    });

    this.get('/auth/config', function() {
      return { config: {
        type: 'form'
      }};
      // return { config: {
      //   type: 'shibboleth',
      //   shibbolethLoginUrl: '/fakeshiblogin'
      // }};
    });

    this.get('/auth/token', function() {
      //un comment to send unauthenticated user data
      // return {
      //   jwt: null
      // };
      let now = moment();
      let nextWeek = now.clone().add(1, 'week');
      let header = '{"alg":"none"}';
      let body = `{"iss": "ilios","aud": "ilios","iat": "${now.format('X')}","exp": "${nextWeek.format('X')}","user_id": 4136}`;

      let encodedData =  window.btoa(header) + '.' +  window.btoa(body) + '.';
      return {
        jwt: encodedData
      };
    });
}
