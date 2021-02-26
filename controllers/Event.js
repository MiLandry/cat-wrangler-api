'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.addevent = function addevent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Event.addevent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteevent = function deleteevent (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Event.deleteevent(eventId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.geteventById = function geteventById (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.geteventById(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateevent = function updateevent (req, res, next) {
  var body = req.swagger.params['body'].value;
  Event.updateevent(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateeventWithForm = function updateeventWithForm (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Event.updateeventWithForm(eventId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
