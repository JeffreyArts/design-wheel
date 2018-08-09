import angular from 'angular';

const colorService = function() {
  'ngInject';
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  // returns an array of startColor, colors between according to steps, and endColor
  return {
      merge: (startColor, endColor, steps) => {
        var ramp = [];

        ramp.push(startColor);

        var startColorRgb = hexToRgb(startColor);
        var endColorRgb = hexToRgb(endColor);

        var rInc = Math.round((endColorRgb.r - startColorRgb.r) / (steps+1));
        var gInc = Math.round((endColorRgb.g - startColorRgb.g) / (steps+1));
        var bInc = Math.round((endColorRgb.b - startColorRgb.b) / (steps+1));

        for (var i = 0; i < steps; i++) {
          startColorRgb.r += rInc;
          startColorRgb.g += gInc;
          startColorRgb.b += bInc;

          ramp.push(rgbToHex(startColorRgb.r, startColorRgb.g, startColorRgb.b));
        }
        ramp.push(endColor);

        return ramp;
      }
  }
};

angular.module('app.services.color', []).service('Color', colorService);
export default colorService;
