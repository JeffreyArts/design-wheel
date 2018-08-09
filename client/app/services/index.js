import angular from 'angular';

//IMPORTS
import './color';
import './data';

const services = angular.module('app.services', [
  'app.services.data',
  'app.services.color',
]);

export default services;
