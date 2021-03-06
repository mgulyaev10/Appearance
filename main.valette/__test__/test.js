const paletteMvk = require('../palette');
const paletteWeb = require('../palette_web');

function checkColorSyntax(palette) {
  Object.keys(palette).forEach((colorName) => {
    const colorValue = palette[colorName];
    if(!/^#([A-F0-9]{3,4}|[A-F0-9]{6}|[A-F0-9]{8})$/.test(colorValue)) {
      throw new Error(`Syntax '${colorName}': ${colorValue} is not a valid`);
    }
  });
}

[paletteMvk, paletteWeb].forEach(palette => checkColorSyntax(palette));
