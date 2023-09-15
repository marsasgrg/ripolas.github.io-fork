let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
const options = {
  lat: 40.73447,
  lng: -74.00232,
  zoom: 13,
  style: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  myMap = mappa.tileMap(options); 
  myMap.overlay(canvas) 
  document.addEventListener('contextmenu', event => event.preventDefault());
  fill(200, 100, 100);
  myMap.onChange(drawPoint);
  httpGet("http://78.56.245.255:8969/ipset/132",'text');
}
function drawPoint(){
}
