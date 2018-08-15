import angular from 'angular';
import template from './spinnerItem.html';
import './spinnerItem.scss';

const spinnerItemComponent = {
  bindings: {
      text: "="
  },
  template,
  controller: function($rootScope, $element) {
    'ngInject';

    this.name = 'spinnerItem';

    this.$onInit = () => {
      //bindings available here
      // console.log($element);
      const $parent = $element[0].parentElement;
      $parent.addEventListener('scroll', () => {
          let pos = $parent.scrollTop + $parent.clientHeight/2 - $element[0].clientHeight*0.5; //$element[0].offsetTop // - $parent.clientHeight - $element[0].clientHeight * 3 +$element[0].clientHeight/2)// -   $parent.clientHeight/2// + $parent.clientHeight/2;
          let difference = $element[0].offsetTop - pos //$element[0].offsetTop // - $parent.clientHeight - $element[0].clientHeight * 3 +$element[0].clientHeight/2)// -   $parent.clientHeight/2// + $parent.clientHeight/2;
          //
          // if (pos<0) {
          //     pos = -pos;
          // }
          // pos -=1
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

    // $rootScope.$on("scrollUpdate", (o, v)=> {
    //     console.log(v);
    //     let pos = $element[0].offsetTop - v;
    //     if (pos<0) {
    //         pos = -pos;
    //     }
    //     if (pos==0) {
    //         pos = 0.01
    //     }
    //     if (pos/100 < 2) {
    //         $element[0].style = `transform: scale(${1 - pos/100});`;
    //         $element[0].setAttribute('adsf', `${pos/100} ${pos};`);
    //     }
    //
    // })

  },
  controllerAs: 'vm'
};

angular.module('app.components.spinnerItem', []).component('spinnerItem', spinnerItemComponent);
export default spinnerItemComponent;
