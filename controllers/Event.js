'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.addEvent = function addEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Event.addEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteEvent = function deleteEvent (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Event.deleteEvent(eventId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventById = function getEventById (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.getEventById(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEvent = function updateEvent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Event.updateEvent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateEventWithForm = function updateEventWithForm (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Event.updateEventWithForm(eventId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
