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
    this.elementPositions = {}
    this.visible = false;

    this.$onInit = () => {

    };


    $rootScope.$on("start", () => {
        // console.log('START');
        this.visible = true;
        this.scrollList($element[0].querySelector(".spinner-container"), this.list)
    })

    this.scrollList = (target, list) => {
        const self = this;
        let posY = 0;
        // _.each($element[0].querySelectorAll(".spinner-item"), v=> {
        //     posY += v.clientHeight
        //     this.elementPositions[posY]= v;
        //     v.className += " " + posY
        //
        // })
        const scrollEnd = target.scrollHeight;
        const duration = this.duration || 6000;
        // const elementHeight = $element[0].querySelector(".spinner-item").clientHeight;
        const className = "__isHetNiet";
        target.scrollTop = 0;
        target.progress = 0;

        new TWEEN.Tween(target)
            .to(
                {
                    scrollTop: scrollEnd,
                    progress: 100
                },
                duration
            )
            .easing(TWEEN.Easing.Cubic.Out)
            .onStart(function(v) {
        		// console.log("Start scroll", self.elementPositions);
        	})
            .onUpdate(function(v) {
                $rootScope.$emit("scrollUpdate", v.scrollTop)
                //
                // let targetPos = Math.round(v.scrollTop/elementHeight) * elementHeight;
                // // h = 10
                // let el = self.elementPositions[targetPos];
                // let prevEl = self.elementPositions[targetPos - elementHeight * 2]
                //
                // if (!_.isUndefined(prevEl)) {
                //     prevEl.className = prevEl.className.replace(className,"")
                // }
                //
                // if (!_.isUndefined(el) && el.className.indexOf(className) === -1) {
                //
                //     el.className = el.className + " " + className
                // }
                //
                // console.log("element:", targetPos, v.scrollTop, elementHeight, v.scrollTop/elementHeight);
                // // currentPos = 128
                //
                // 12 * h
                //
                // arr[floor(128/10)]
                //
                // ---------
                // h = 15
                //
                // currentPos = 128
                //
                //
                // 8 * h
                //
                // v[120]
        	})
            .onComplete(function(v) {
                // const selected = target.querySelector(".spinner-item:nth-last-child(2)")
                // selected.style = "color: #be0f34;"
            })
            .start();
    }

  },
  controllerAs: 'vm'
};

angular.module('app.components.spinner', []).component('spinner', spinnerComponent);
export default spinnerComponent;
