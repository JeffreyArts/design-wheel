import angular from 'angular';
import _ from 'lodash';
import rgbHex from 'rgb-hex';
import TWEEN from '@tweenjs/tween.js';

import routeWrap from 'ng-component-routing';
import template from './dashboard.html';
import './dashboard.scss';

function animate() {
  window.animationFrameId = requestAnimationFrame(animate);
  TWEEN.update();
}

animate();

const controller = function(Data, $rootScope, $scope, Color) {
  'ngInject';

  const setList = input => {
      let list = []

      while (list.length <= 100) {
          list.push(input)
          list = _.flatten(list);
      }

      return _.shuffle(_.flatten(list));
  }


  this.colors = [
      {
          type: "neutral",
          color1: "#ffffff",
          color2: "#5B5B5B"
      },
      {
          type: "social",
          color1: "#FAD961",
          color2: "#F76B1C"
      },
      {
          type: "environment",
          color1: "#B4EC51",
          color2: "#3F8F0C"
      },
      {
          type: "technology",
          color1: "#29DAE2",
          color2: "#1A79CC"
      },
  ]

  this.start = false
  this.color1 = "#fff";
  this.color2 = "#B5B5B5";


  // Companies
  this.companies = _.map(setList(Data.companies), "name");
  this.companies.unshift("Companies")
  this.companies.unshift("Companies")
  this.companies.unshift("Companies")


  // Topics
  this.topics = _.map(setList(Data.topics), "name");
  this.topics.unshift("Topics")
  this.topics.unshift("Topics")
  this.topics.unshift("Topics")
  this.startV = false;

  this.start = colors => {
      this.startV = !this.startV
      $rootScope.$broadcast("start")

      const self = this;
      const colorsLength = _.size(colors)
      const duration = 10000;
      const inBetweenSteps = duration / colorsLength / 100;
      let currentColor = Math.floor(colorsLength/ 100 * 0);
      let prevColor = null;
      let tmp1 = null
      let tmp2 = null
      // const nextColor = Math.ceil(colorsLength/ 100 * progress);
      new TWEEN.Tween({v: 0})
          .to({v:100},
              duration
          )
          .onUpdate(function(o) {
              if (_.isUndefined(colors[currentColor+1])) {
                  console.log("errris", );
                  // Dit moet ff gecontroleerd worden, dit zorgt geheid voor gezeik
                  window.cancelAnimationFrame(window.animationFrameId)
                  return false;
              }
              const progress = o.v;
              const innerProgress = progress * colorsLength - currentColor * 100;
              if (prevColor != currentColor) {
                  tmp1 = Color.merge(colors[currentColor].color1,colors[currentColor+1].color1, inBetweenSteps)
                  tmp2 = Color.merge(colors[currentColor].color2,colors[currentColor+1].color2, inBetweenSteps)
              }

              prevColor = currentColor;
              currentColor = Math.floor(colorsLength/ 100 * progress);

              self.color1 = tmp1[Math.round(inBetweenSteps/100*innerProgress)]
              self.color2 = tmp2[Math.round(inBetweenSteps/100*innerProgress)]
              $scope.$apply();
          })
          .start();
  }
  console.log(Color);
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
