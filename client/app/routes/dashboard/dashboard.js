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


  const colorConfig = {
      "neutral": {
          color1: "#ffffff",
          color2: "#5B5B5B"
      },
      social: {
          color1: "#FAD961",
          color2: "#F76B1C"
      },
      environment: {
          color1: "#B4EC51",
          color2: "#3F8F0C"
      },
      technology:{
          color1: "#29DAE2",
          color2: "#1A79CC"
      },
      fear:{
          color1: "#F5515F",
          color2: "#9F041B"
      },
      fun:{
          color1: "#F81F9A",
          color2: "#F6D70F"
      },
  }
  this.colors = [];

  this.start = false;
  this.duration = 6000;
  this.color1 = "#fff";
  this.color2 = "#B5B5B5";
  this.startV = false;


  // Companies
  this.companies = _.map(setList(Data.companies), "name");


  // Topics
  this.topics = setList(Data.topics);

  _.each(colorConfig, v=> {
      this.colors.push(v)
  })
  this.colors.push(colorConfig[this.topics[this.topics.length-3].type])

  this.topics = _.map(this.topics, "name");



  this.start = colors => {
      this.startV = !this.startV
      $rootScope.$broadcast("start")

      const self = this;
      const colorsLength = _.size(colors)
      const inBetweenSteps = self.duration / colorsLength / 100;
      let currentColor = Math.floor(colorsLength/ 100 * 0);
      let prevColor = null;
      let tmp1 = null
      let tmp2 = null
      // const nextColor = Math.ceil(colorsLength/ 100 * progress);
      new TWEEN.Tween({v: 0})
          .to({v:100},
              self.duration
          )
          .onUpdate(function(o) {
              if (_.isUndefined(colors[currentColor+1])) {
                  // Dit moet ff gecontroleerd worden, dit zorgt geheid voor gezeik
                  // window.cancelAnimationFrame(window.animationFrameId)
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
