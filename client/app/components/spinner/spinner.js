import angular from 'angular';
import TWEEN from '@tweenjs/tween.js';

import _ from 'lodash';
import template from './spinner.html';
import './spinner.scss';

const spinnerComponent = {
  bindings: {
      list: "=",
      duration: "=",
      start: "="
  },
  template,
  controller: function($element, $rootScope) {
    'ngInject';

    this.visible = false;

    this.$onInit = () => {

    };


    $rootScope.$on("start", () => {
        this.visible = true;
        this.scrollList($element[0].querySelector(".spinner-container"), this.list)
    })

    this.scrollList = (target, list) => {

        const scrollEnd = target.scrollHeight;
        const duration = this.duration || 6000;
        target.scrollTop = 0;

        new TWEEN.Tween(target)
            .to(
                {
                    scrollTop: scrollEnd
                },
                duration
            )
            .easing(TWEEN.Easing.Cubic.Out)
            .start();
    }

  },
  controllerAs: 'vm'
};

angular.module('app.components.spinner', []).component('spinner', spinnerComponent);
export default spinnerComponent;
