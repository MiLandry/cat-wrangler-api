'use strict';


/**
 * Creates a new event
 *
 * body Event event object to be scheduled
 * no response value expected for this operation
 **/
exports.addEvent = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a event
 *
 * eventId Long event id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteevent = function(eventId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find event by ID
 * Returns a single event
 *
 * eventId Long ID of event to return
 * returns Event
 **/
exports.geteventById = function(eventId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator" : "John Doe",
  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
  "name" : "board game christmas get together",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing event
 *
 * body Event event object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateevent = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a event in the store with form data
 *
 * eventId Long ID of event that needs to be updated
 * name String Updated name of the event (optional)
 * status String Updated status of the event (optional)
 * no response value expected for this operation
 **/
exports.updateeventWithForm = function(eventId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

