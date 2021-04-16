let sound, amplitude;
let song, analyzer;
let r, g, b;
let mic, fft;

function preload() {
  song = loadSound('v2.mp3');
}

function setup() {
  let cnv = createCanvas(2560, 1600);
  frameRate(60);
  // r = random(255);
  // g = random(255);
  // b = random(255);
  // stroke( 130, 23, 255, 89 )

  cnv.mouseClicked(toggleSound);
  
  amplitude = new p5.Amplitude();
  song.loop();

  // create a new Amplitude analyzer
  // analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  amplitude.setInput(song);

  //for mic
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  // background(248, 84, 7); //hindu
  // background(177, 192, 216,) //christ
  background(76, 105, 217, 0.1) //synagogue
  

  // Get the average (root mean square) amplitude
  let rms = amplitude.getLevel();
  // fill(r, g, b, 127);
  noFill();

  // stroke(250, 182, 29, 70); hindu
    // stroke(220, 231, 230, 70); //christian
    stroke(5, 7, 253, 70); //syangogue

  smooth(0);

  // Draw an ellipse with size based on volume
  // ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
  let level = amplitude.getLevel();
  let spectrum = fft.analyze();
  
      beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 500, 60, -250, 2560));
  }
  endShape();
  

    beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 500, 60, -150, 2560));

  }
  endShape();
  
  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 500, 60, 0, 2560));

  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 500, 60, 150, 2560));

  }
  endShape();


  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 500, 60, 250, 2560));

  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 350, 2560));
  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 450, 2560));

  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 550, 2560));

  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60,650, 2560));

  }
  endShape();


  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 750, 2560));

  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 850, 2560));

  }
  endShape();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 950, 2560));

  }
  endShape();

}

function toggleSound() {
  console.log(song);
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}