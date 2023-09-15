let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
  lat: 
54.705581679104775, 
  lng: 
25.24944307864644, 
  zoom: 
12, 
  style: 
"http://{s}.tile.osm.org/{z}/{x}/{y}.png"
  }
function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 
  document.addEventListener('contextmenu', event => event.preventDefault());
  fill(200, 100, 100);
  myMap.onChange(drawPoint);
}
function drawPoint(){
}
