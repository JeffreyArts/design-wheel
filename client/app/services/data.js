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
              type: "technology",
              name: "5G network"
          },
          {
              type: "technology",
              name: "Blockchain"
          },
      ]
  }

};

angular.module('app.services.data', []).service('Data', dataService);
export default dataService;