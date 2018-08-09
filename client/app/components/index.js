import angular from 'angular';

//IMPORTS
import './spinner/spinner';

const components = angular.module('app.components', [
  'app.components.spinner',
]);

export default components;
