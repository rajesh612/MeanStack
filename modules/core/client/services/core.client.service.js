/**
 * Created by Rajesh on 8/5/2016.
 */
'use strict';
const url = '/api/contact';  //JS constant
angular
    .module('ContactsApp')
    .factory('ContactService',function ($http) {
        var _getContacts = function () {
            var promise = $http.get(url);
            return promise;
        },
        _saveContact = function (contact) {
            var savePromise = $http.post(url,contact);
            return savePromise;
        },
        _editContact = function (id) {
            var editPromise = $http.get(url + '/' + id);
            return editPromise;
        },
         _updateContact = function (id,contact) {
            var updatePromise = $http.put(url + '/' + id, contact);
            return updatePromise;
        },
        _deleteContact = function (id) {
            var deletePromise = $http.delete(url + '/' + id);
            return deletePromise;
        };
   return{
       _getContacts : _getContacts,
       _saveContact : _saveContact,
       _editContact : _editContact,
       _updateContact : _updateContact,
       _deleteContact : _deleteContact
    };
    });

