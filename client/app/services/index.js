import angular from 'angular';

//IMPORTS
import './data';

const services = angular.module('app.services', [
  'app.services.data',
]);

export default services;
