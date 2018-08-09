import angular from 'angular';
import _ from 'lodash';
import routeWrap from 'ng-component-routing';
import template from './dashboard.html';
import './dashboard.scss';

const controller = function(data, $rootScope) {
  'ngInject';

  const setList = input => {
      let list = []

      while (list.length <= 100) {
          list.push(input)
          list = _.flatten(list);
      }

      return _.shuffle(_.flatten(list));
  }

  this.start = false
  this.color1 = "#fff";
  this.color2 = "#B5B5B5";


  // Companies
  this.companies = _.map(setList(data.companies), "name");
  this.companies.unshift("Companies")
  this.companies.unshift("Companies")
  this.companies.unshift("Companies")


  // Topics
  this.topics = _.map(setList(data.topics), "name");
  this.topics.unshift("Topics")
  this.topics.unshift("Topics")
  this.topics.unshift("Topics")
  this.startV = false;

  this.start = () => {
      this.startV = !this.startV
      $rootScope.$broadcast("start")
  }
};

const dashboardComponent = {
  bindings: {},
  routeOpts: {
    name: 'dashboard',
    url: '/',
    pageTitle: 'dashboard',
  },
  template,
  controller,
  controllerAs: 'vm'
};

routeWrap(angular).module('app.routes.dashboard', []).route('dashboard', dashboardComponent);
export default dashboardComponent;
