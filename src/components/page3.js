import React, { useState, useEffect } from 'react';
import p5 from 'p5';

const Page3 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const langs = [
    "Hello World",
	"مرحبا بالعالم",
	"Salam Dünya",
	"Прывітанне Сусвет",
	"Здравей свят",
	"ওহে বিশ্ব",
	"Zdravo svijete",
	"Hola món",
	"Kumusta Kalibutan",
	"Ahoj světe",
	"Helo Byd",
	"Hej Verden",
	"Hallo Welt",
	"Γειά σου Κόσμε",
	"Hello World",
	"Hello World",
	"Hola Mundo",
	"Tere, Maailm",
	"Kaixo Mundua",
	"سلام دنیا",
	"Hei maailma",
	"Bonjour le monde",
	"Dia duit an Domhan",
	"Ola mundo",
	"હેલો વર્લ્ડ",
	"Sannu Duniya",
	"नमस्ते दुनिया",
	"Hello World",
	"Pozdrav svijete",
	"Bonjou Mondyal la",
	"Helló Világ",
	"Բարեւ աշխարհ",
	"Halo Dunia",
	"Ndewo Ụwa",
	"Halló heimur",
	"Ciao mondo",
	"שלום עולם",
	"こんにちは世界",
	"Hello World",
	"Გამარჯობა მსოფლიო",
	"Сәлем Әлем",
	"សួស្តី​ពិភពលោក",
	"ಹಲೋ ವರ್ಲ್ಡ್",
	"안녕하세요 월드",
	"Ciao mondo",
	"ສະ​ບາຍ​ດີ​ຊາວ​ໂລກ",
	"Labas pasauli",
	"Sveika pasaule",
	"Hello World",
	"Kia Ora",
	"Здраво свету",
	"ഹലോ വേൾഡ്",
	"Сайн уу",
	"हॅलो वर्ल्ड",
	"Hai dunia",
	"Hello dinja",
	"မင်္ဂလာပါကမ္ဘာလောက",
	"नमस्कार संसार",
	"Hallo Wereld",
	"Hei Verden",
	"Moni Dziko Lapansi",
	"ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ",
	"Witaj świecie",
	"Olá Mundo",
	"Salut Lume",
	"Привет, мир",
	"හෙලෝ වර්ල්ඩ්",
	"Ahoj svet",
	"Pozdravljen, svet",
	"Waad salaaman tihiin",
	"Përshendetje Botë",
	"Здраво Свете",
	"Lefatše Lumela",
	"Halo Dunya",
	"Hej världen",
	"Salamu, Dunia",
	"ஹலோ வேர்ல்ட்",
	"హలో వరల్డ్",
	"Салом Ҷаҳон",
	"สวัสดีชาวโลก",
	"Kamusta Mundo",
	"Selam Dünya",
	"Привіт Світ",
	"ہیلو ورلڈ",
	"Salom Dunyo",
	"Chào thế giới",
	"העלא וועלט",
	"Mo ki O Ile Aiye",
	"你好，世界",
	"你好，世界",
	"你好，世界",
	"Sawubona Mhlaba"
];

let streams = [];
const charSize = 18;

class Char {
  constructor(value, x, y, speed) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  draw(p) {
    const flick = p.random(100);
    if (flick < 10) {
      p.fill(120, 30, 100);
      p.text(Math.round(p.random(9)), this.x, this.y);
    } else {
      p.text(this.value, this.x, this.y);
    }

    this.y = this.y > p.height ? 0 : this.y + this.speed;
  }
}

class Stream {
  constructor(text, x, p) {
    const y = p.random(text.length * 4);
    const speed = p.random(2, 10);
    this.chars = [];

    for (let i = text.length; i >= 0; i--) {
      this.chars.push(new Char(text[i], x, (y + text.length - i) * charSize, speed));
    }
  }

  draw(p) {
    p.fill(120, 100, 100);
    this.chars.forEach((c, i) => {
      const lit = p.random(100);
      if (lit < 30) {
        if (i === this.chars.length - 1) {
          p.fill(120, 30, 100);
        } else {
          p.fill(120, 100, 90);
        }
      }

      c.draw(p);
    });
  }
}

const createStreams = (p) => {
  for (let i = 0; i < p.width; i += charSize) {
    streams.push(new Stream(p.random(langs), i, p));
  }
};

const reset = (p) => {
  streams = [];
  createStreams(p);
};

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    reset(p);
    p.frameRate(60);
    p.colorMode(p.HSB);
    p.noStroke();
    p.textSize(charSize);
    p.textFont('monospace');
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 0.4);
    streams.forEach((s) => s.draw(p));

    // Show the popup if the state is true
    if (showPopup) {
      p.fill(255); // White color
      p.text('UN*#FORTUNANTLY IT IS RAINING MATRIX DUE TO NUIT DINFO ', p.width / 2, p.height / 2);
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
    reset(p);
  };
};

useEffect(() => {
  const p5Instance = new p5(sketch);

  // Show the popup directly without the button
  setShowPopup(true);

  return () => {
    // Cleanup code here
    p5Instance.remove();
  };
},); // Empty dependency array since we want this to happen once on mount

return <div id="sketch-container" />;
};

export default Page3;