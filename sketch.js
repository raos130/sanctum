let sound, amplitude;
let song, analyzer;
let r, g, b;
let mic, fft;

function preload() {
  song = loadSound('images/v3.mp3');
}

function setup() {
  let cnv = createCanvas(600, 600);
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
  background(0);

  // Get the average (root mean square) amplitude
  let rms =  amplitude.getLevel();
  // fill(r, g, b, 127);
  noFill();
// fill( 250, 182, 29);
stroke(250, 182, 29, 50);

  smooth(0);

  // Draw an ellipse with size based on volume
  // ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
   let level =  amplitude.getLevel();
  let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 100, 600));

  }
  endShape();

    ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100,60, 150, 600));

  }
  endShape();


    ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 200, 600));

  }
  endShape();

    ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 250, 600));
  }
  endShape();

      ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 300, 600));

  }
  endShape();

ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30,100, 60, 350, 600));

  }
  endShape();

      ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30,100, 60, 400, 600));

  }
  endShape();


       ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 450, 600));

  }
  endShape();

            ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 500, 600));

  }
  endShape();

              ellipse();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 30, 100, 60, 550, 600));

  }
  endShape();

}

function toggleSound() {
  if (sound.isPlaying() ) {
    sound.stop();
  } else {
    sound.play();
  }
}
