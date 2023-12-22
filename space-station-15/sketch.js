// main.js

let tileSystem = []; // Array to store tiles
let entitySystem = []; // Array to store

let hoveredTileIndex = -1

let cameraOffset;

// Tile registry to map tile types to constructors
const tileRegistry = {
  'lattice': Lattice,
  'plating': Plating,
  'steelTile': SteelTile
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

function loadMap(customMapData = null) {
  //TODO: Unclass this function

  // Clear existing tile system
  tileSystem = [];
  entitySystem = [];

  // Iterate through the array
  if(customMapData === null) {
    for (let i in mapData) {
      if (mapData.hasOwnProperty(i)) {
        // Convert x and y to integers
        let tx = int(mapData[i].tiles[0].position.x);
        let ty = int(mapData[i].tiles[0].position.y);

        if(mapData[i].hasOwnProperty("entities")){
        let ex = int(mapData[i].entities[0].subPosition.x);
        let ey = int(mapData[i].entities[0].subPosition.y);

        if (mapData[i].entities[0].components.includes("/")) {
          this.componentsArray = mapData[i].entities[0].components.split("/");
          } else {
            this.componentsArray = mapData[i].entities[0].components
          }
        
          if(mapData[i].entities[0].type === "human"){
            if (mapData[i].entities[0].components.includes("/")) {
              this.sex = this.componentsArray.filter((item) => item.includes(`sex:${sex}`));
              } else {
                this.sex = this.componentsArray.split(":")
                this.sex = this.sex[1]
              }

             this.entity = createEntity(mapData[i].entities[0].type, ex, ey, this.sex);
             console.log("Created a",this.sex,"human")
          }

          entitySystem.push(this.entity);
        }

        // Dynamically instantiate a tile based on the JSON data
        let tile = createTile(mapData[i].tiles[0].type, tx, ty, mapData[i].objects);

        // Add the new tile to the tile system

        tileSystem.push(tile);
      }
    }
  } else {
    for (let i in customMapData) {

      let tile = customMapData[i]

      tileSystem.push(tile);
    }
  }
}

function draw() {
  clear()

  for (let entity of entitySystem) {
    cameraOffset = entity.getValues();
    heldItemName = entity.getHeldItemName();
  }


  for (let i = tileSystem.length - 1; i >= 0; i--) {
    translate(-cameraOffset.x - 32, -cameraOffset.y - 32);
    tileSystem[i].display();
    translate(cameraOffset.x + 32, cameraOffset.y + 32);
    if (heldItemName === "crowbar") {
      if (
        mouseX > tileSystem[i].x * 32 - 32 - cameraOffset.x &&
        mouseX < tileSystem[i].x * 32 - cameraOffset.x &&
        mouseY > tileSystem[i].y * 32 - cameraOffset.y &&
        mouseY < tileSystem[i].y * 32 + 32 - cameraOffset.y &&
        mouseIsPressed === true &&
        mouseButton === LEFT
      ) {
        hoveredTile = tileSystem[i];

        oldTileSystem = tileSystem
        
        firstPart = oldTileSystem.slice(0, i+1);
        secondPart = oldTileSystem.slice(i+1);

        console.log(firstPart, secondPart)

        secondPart = secondPart.slice(1)

        tileSystem = [];

        mapData = firstPart.concat(secondPart);
        console.log(mapData)
        loadMap(mapData)
      }
    }
  }
  
  

  for (let entity of entitySystem) {
    entity.display();
  }

  if (keyIsDown(82)) {
    // Reload the map when the 'R' key is pressed
    loadStartupData(onStartupDataLoaded);
    loadMap();
  }
}
