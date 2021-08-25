/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import P5Wrapper from 'react-p5-wrapper';
import React from 'react';
import './App.css';
import './util/addons/p5.sound';
import mymusic from "./assets/teste.mp3";

function App() {
  var song;
  let fft;
  let button;

  function toggleSong() {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }

  const sketch = (p5) => {
    p5.preload = () => {
      p5.soundFormats('mp3', 'ogg');
      song = new window.p5.prototype.loadSound(mymusic);
    }

    p5.setup = () => {
      p5.createCanvas(256, 256);
      p5.colorMode(p5.HSB);
      p5.angleMode(p5.DEGREES);
      button = p5.createButton('toggle');
      button.mousePressed(toggleSong);
      song.play();
      fft = new window.p5.FFT(0.9, 128);
    };

    p5.draw = () => {
      p5.background(0);
      var spectrum = fft.analyze();
      p5.noStroke();
      p5.translate(100 / 2, 100 / 2);
    
      for (var i = 0; i < spectrum.length; i++) {
        var angle = p5.map(i, 0, spectrum.length, 0, 360);
        var amp = spectrum[i];
        var r = p5.map(amp, 0, 256, 20, 100);
        var x = r * p5.cos(angle);
        var y = r * p5.sin(angle);
        p5.stroke(i, 255, 255);
        p5.line(0, 0, x, y);
      }
    }
  }

  return (
    <P5Wrapper sketch={sketch} />
  );
}

export default App;
