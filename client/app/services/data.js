import angular from 'angular';

const dataService = function() {
  'ngInject';
  return {
      "companies": [
          {
              name: "Shell"
          },
          {
              name: "Philips"
          },
          {
              name: "Google"
          },
          {
              name: "Facebook"
          },
          {
              name: "Toyota"
          },
          {
              name: "Volkswagen"
          },
          {
              name: "Apple"
          },
          {
              name: "Amazon"
          },
          {
              name: "ING"
          },
          {
              name: "Unilever"
          },
      ],
      "topics": [
          {
              type: "social",
              name: "Racism"
          },
          {
              type: "environment",
              name: "Deforestation"
          },
          {
              type: "innovation",
              name: "5G network"
          },
          {
              type: "innovation",
              name: "Blockchain"
          },
      ]
  }

};

angular.module('app.services.data', []).service('data', dataService);
export default dataService;
