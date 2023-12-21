// dataLoader.js

function loadStartupData(callback) {
    loadJSON('/Users/joemama/Desktop/SS15/my-p5-electron-app/config/startup.json', callback);
  }
  
  function loadMapData(callback) {
    loadJSON('/Users/joemama/Desktop/SS15/my-p5-electron-app/maps/joemama.json', callback);
  }
  