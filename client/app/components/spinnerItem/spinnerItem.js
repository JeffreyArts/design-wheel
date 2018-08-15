import angular from 'angular';
import template from './spinnerItem.html';
import './spinnerItem.scss';

const spinnerItemComponent = {
  bindings: {
      text: "="
  },
  template,
  controller: function($element) {
    'ngInject';

    this.name = 'spinnerItem';

    this.$onInit = () => {
      const $parent = $element[0].parentElement;
      $parent.addEventListener('scroll', () => {
          let pos = $parent.scrollTop + $parent.clientHeight/2 - $element[0].clientHeight*0.5;
          let difference = $element[0].offsetTop - pos;

          if (Math.abs(difference/200) < 1) {
              let style = `transform: scale(${1.2- Math.abs(difference/100)}); opacity: ${1- Math.abs(difference/200)};`;

              if (1- Math.abs(difference/100) > .6) {
                  style += " font-weight:bold;";
              }

              $element[0].style = style;
          }
          $element[0].setAttribute("helper", `${difference} `);
      })

    };

  },
  controllerAs: 'vm'
};

angular.module('app.components.spinnerItem', []).component('spinnerItem', spinnerItemComponent);
export default spinnerItemComponent;
