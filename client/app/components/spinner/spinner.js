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
  controller: function($timeout,$element, $rootScope) {
    'ngInject';

    this.selected = null;
    this.elementHeight = 32;


    this.$onInit = () => {

    };

    $rootScope.$on("start", () => {
        console.log('START');
        this.scrollList($element[0].querySelector(".spinner-container"), this.list)
    })

    this.scrollList = (target, list) => {
        const scrollEnd = target.scrollTopMax;
        const duration = this.duration || 6000;
        target.scrollTop = 0;

        animate();

        function animate() {
        	requestAnimationFrame(animate);
        	// [...]
        	TWEEN.update();
        	// [...]
        }

        new TWEEN.Tween(target)
            .to(
                {
                    scrollTop: scrollEnd
                },
                duration
            )
            .easing(TWEEN.Easing.Cubic.Out)
            .onStart(function(v) {
        		console.log("Start scroll");
        	})
            .onComplete(function(v) {
                const selected = target.querySelector(".spinner-item:nth-last-child(2)")
                selected.style = "color: #be0f34;"
            })
            .start();
    }

  },
  controllerAs: 'vm'
};

angular.module('app.components.spinner', []).component('spinner', spinnerComponent);
export default spinnerComponent;
