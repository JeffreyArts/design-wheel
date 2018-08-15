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
              name: "ING"
          },
          {
              name: "Unilever"
          },
          {
              name: "Bluetooth"
          },
          {
              name: "IKEA"
          },
          {
              name: "Dutch design"
          },
          {
              name: "Swiss design"
          },
          {
              name: "Scandinavian design"
          },
          {
              name: "McDonald's"
          },
          {
              name: "Coca Cola"
          },
          {
              name: "Nintendo"
          },
          {
              name: "Nike"
          },
          {
              name: "Disney"
          },
          {
              name: "Mercedes-Benz"
          },
          {
              name: "Louis Vuitton"
          },
          {
              name: "Marlboro"
          },
          {
              name: "Heineken"
          },
          {
              name: "UPS"
          },
          {
              name: "Nestle"
          },
          {
              name: "Netflix"
          },
          {
              name: "Red Bull"
          },
          {
              name: "Adidas"
          },
          {
              name: "Boeing"
          },
          {
              name: "LEGO"
          },
          {
              name: "PayPal"
          },
          {
              name: "KFC"
          },
          {
              name: "Southpark"
          },
          {
              name: "Friends"
          },
          {
              name: "Myth Busters"
          },
          {
              name: "Blijdorp Zoo"
          },
          {
              name: "Youtube"
          },
          {
              name: "Autodesk"
          },
          {
              name: "Action"
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
          {
              type: "social",
              name: "Religion"
          },
          {
              type: "social",
              name: "Immigration"
          },
          {
              type: "social",
              name: "Homeless"
          },
          {
              type: "social",
              name: "Sports"
          },
          {
              type: "fear",
              name: "Nationalism"
          },
          {
              type: "fear",
              name: "Privacy"
          },
          {
              type: "environment",
              name: "Marihuana"
          },
          {
              type: "technology",
              name: "Net neutrality"
          },
          {
              type: "fear",
              name: "Mass Surveillance"
          },
          {
              type: "fear",
              name: "Artificial intelligence"
          },
          {
              type: "technology",
              name: "Artificial intelligence"
          },
          {
              type: "environment",
              name: "Sustainability"
          },
          {
              type: "environment",
              name: "Cradle to cradle"
          },
          {
              type: "environment",
              name: "Medicine"
          },
          {
              type: "fun",
              name: "Music"
          },
          {
              type: "fun",
              name: "Art"
          },
          {
              type: "fun",
              name: "Communist system"
          },
          {
              type: "environment",
              name: "Renewable energy"
          },
          {
              type: "social",
              name: "War"
          },
          {
              type: "technology",
              name: "Drones"
          },
          {
              type: "fun",
              name: "Prison"
          },
          {
              type: "environment",
              name: "GMO"
          },
          {
              type: "environment",
              name: "Public transport"
          },
          {
              type: "technology",
              name: "Graphene"
          },
          {
              type: "social",
              name: "4 Day workweek"
          },
      ]
  }

};

angular.module('app.services.data', []).service('Data', dataService);
export default dataService;
