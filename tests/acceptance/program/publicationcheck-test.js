/* global moment */
import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'ilios/tests/helpers/start-app';

var application;
var fixtures = {};
module('Acceptance: Program Year - Publication Check', {
  beforeEach: function() {
    application = startApp();
    authenticateSession();
    server.create('user', {id: 4136});
    server.create('school');
    server.create('objective');
    server.create('discipline');
    server.create('competency');
    server.create('program', {
      programYears: [1]
    });
    fixtures.fullProgramYear = server.create('programYear', {
      startYear: 2013,
      owningSchool: 1,
      program: 1,
      directors: [4136],
      objectives: [1],
      disciplines: [1],
      competencies: [1],
    });
    fixtures.emptyProgramYear = server.create('programYear', {
      startYear: 2013,
      owningSchool: 1,
      program: 1
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('full program count', function(assert) {
  visit('/programs/1/programyears/' + fixtures.fullProgramYear.id + '/publicationcheck');
  andThen(function() {
    assert.equal(currentPath(), 'program.programYear.publicationCheck');
    var items = find('.programyear-publication-check .detail-content table tbody td');
    assert.equal(getElementText(items.eq(0)), getText('2013 - 2014'));
    assert.equal(getElementText(items.eq(1)), getText('Yes (1)'));
    assert.equal(getElementText(items.eq(2)), getText('Yes (1)'));
    assert.equal(getElementText(items.eq(3)), getText('Yes (1)'));
    assert.equal(getElementText(items.eq(4)), getText('Yes (1)'));
  });
});

test('empty program count', function(assert) {
  visit('/programs/1/programyears/' + fixtures.emptyProgramYear.id + '/publicationcheck');
  andThen(function() {
    assert.equal(currentPath(), 'program.programYear.publicationCheck');
    var items = find('.programyear-publication-check .detail-content table tbody td');
    assert.equal(getElementText(items.eq(0)), getText('2013 - 2014'));
    assert.equal(getElementText(items.eq(1)), getText('No'));
    assert.equal(getElementText(items.eq(2)), getText('No'));
    assert.equal(getElementText(items.eq(3)), getText('No'));
    assert.equal(getElementText(items.eq(4)), getText('No'));
  });
});
