import angular from 'angular';

//IMPORTS
import './spinnerItem/spinnerItem';
import './spinner/spinner';

const components = angular.module('app.components', [
  'app.components.spinner',
  'app.components.spinnerItem',
]);

export default components;
