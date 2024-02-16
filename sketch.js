let symmetry = 6;
let angle = 360 / symmetry;

let sw = 2;

let symmetrySlider;
let clearButton;
let saveButton;

function setup() {
  createCanvas(windowWidth, windowHeight-30);
  background(255);
  
  symmetrySlider = createSlider(1, 20, 6);
  clearButton = createButton('clear');
  saveButton = createButton('save');
  
  angleMode(DEGREES);
  
}

function draw() {
  translate(width / 2, height / 2);
    
  symmetry = symmetrySlider.value();
  
  angle = 360 / symmetry;
  
  clearButton.mousePressed(() => {
    background(255);
  });
  
  saveButton.mousePressed(() => {
    saveCanvas('symmetryDrawing');
  });

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  }
}