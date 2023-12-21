// main.js

let tileSystem = []; // Array to store tiles
let entitySystem = []; // Array to store

// Tile registry to map tile types to constructors
const tileRegistry = {
  'lattice': Lattice,
  // Add more tile types and their constructors as needed
};

// Tile registry to map tile types to constructors
const entityRegistry = {
  'human': Human,
  // Add more tile types and their constructors as needed
};

let startupData;
let map;
let mapData;

function preload() {
  loadStartupData(onStartupDataLoaded);
}

function onStartupDataLoaded(data) {
  startupData = data;
  loadMapData(onMapDataLoaded);
}

function onMapDataLoaded(data) {
  mapData = data;
  setup();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadMap();
}

function createTile(type, x, y, objects) {
  // Check if the tile type is registered, default to generic Tile if not
  let TileConstructor = tileRegistry[type] || Tile;
  return new TileConstructor(x, y, type, objects);
}

function createEntity(type, x, y, data) {
  // Check if the Entity type is registered, default to generic Entity if not
  let EntityConstructor = entityRegistry[type] || Entity;
  return new EntityConstructor(x, y, type, data);
}

function loadMap() {
  // Clear existing tile system
  tileSystem = [];
  entitySystem = [];

  // Iterate through the array
  for (let i in mapData) {
    if (mapData.hasOwnProperty(i)) {
      // Convert x and y to integers
      let tx = int(mapData[i].tiles[0].position.x);
      let ty = int(mapData[i].tiles[0].position.y);

      let ex = int(mapData[i].entities[0].subPosition.x);
      let ey = int(mapData[i].entities[0].subPosition.y);

      // Dynamically instantiate a tile based on the JSON data
      let tile = createTile(mapData[i].tiles[0].type, tx, ty, mapData[i].objects);
      let entity = createEntity(mapData[i].entities[0].type, ex, ey, "male");

      // Add the new tile to the tile system

      entitySystem.push(entity);
      tileSystem.push(tile);
    }
  }
}

function draw() {
  clear()

  for (let entity of entitySystem) {
    entity.display();
  }

  for (let tile of tileSystem) {
    tile.display();
  }

  if (keyIsDown(82)) {
    // Reload the map when the 'R' key is pressed
    loadStartupData(onStartupDataLoaded);
    loadMap();
  }
}
