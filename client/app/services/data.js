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
              name: "Western Union"
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
              name: "Kellog's"
          },
          {
              name: "Disney"
          },
          {
              name: "Mercedes-Benz"
          },
          {
              name: "LVMH"
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
              name: "AB InBev"
          },
          {
              name: "Hilton"
          },
          {
              name: "Ingersoll-Rand"
          },
          {
              name: "BASF"
          },
          {
              name: "Youtube"
          },
          {
              name: "Autodesk"
          },
          {
              name: "Bayer"
          },
          {
              name: "Tintin"
          },
          {
              name: "Bosch"
          },
          {
              name: "SBS 6"
          },
          {
              name: "Pathé"
          },
          {
              name: "Public transport"
          },
          {
              name: "FIFA"
          },
          {
              name: "Blijdorp Zoo"
          },
          {
              name: "Action"
          },
          {
              name: "Unicorn startup"
          },
          {
              name: "KFC"
          },
          {
              name: "VOC"
          },
          {
              name: "Southpark"
          },
          {
              name: "Holland"
          },
      ],
      "topics": [
          {
              type: "fun",
              name: "Black"
          },
          {
              type: "fun",
              name: "Alcohol"
          },
          {
              type: "technology",
              name: "Paper"
          },
          {
              type: "social",
              name: "Racism"
          },
          {
              type: "environment",
              name: "Food"
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
              type: "social",
              name: "Peace"
          },
          {
              type: "fun",
              name: "Big reset"
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
              type: "entertainment",
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
              type: "fear",
              name: "Mass Surveillance"
          },
          {
              type: "fear",
              name: "Phobia"
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
              type: "social",
              name: "Sharing economy"
          },
          {
              type: "environment",
              name: "Flooding"
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
              type: "environment",
              name: "Borders"
          },
          {
              type: "entertainment",
              name: "Music"
          },
          {
              type: "entertainment",
              name: "Videogame"
          },
          {
              type: "entertainment",
              name: "Art"
          },
          {
              type: "entertainment",
              name: "Cosplay"
          },
          {
              type: "entertainment",
              name: "Gambling"
          },
          {
              type: "entertainment",
              name: "Live entertainment"
          },
          {
              type: "entertainment",
              name: "Magazine"
          },
          {
              type: "fun",
              name: "Communist system"
          },
          {
              type: "fun",
              name: "Emotional design"
          },
          {
              type: "technology",
              name: "Human interfaces"
          },
          {
              type: "environment",
              name: "Biomimicry"
          },
          {
              type: "technology",
              name: "Service design"
          },
          {
              type: "technology",
              name: "Machine interaction"
          },
          {
              type: "fun",
              name: "Neon"
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
              type: "fun",
              name: "Extraterrestrial life"
          },
          {
              type: "fun",
              name: "Furniture"
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
              type: "technology",
              name: "Dental care"
          },
      ]
  }

};

angular.module('app.services.data', []).service('Data', dataService);
export default dataService;
