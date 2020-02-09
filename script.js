var phrases = [
    { author: "Jess C. Scott", source: "The Darker Side of Life", quote: "The brightest light casts the darkest shadow." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "To condense fact from the vapor of nuance." },
    { author: "William Gibson", source: "Neuromancer", quote: "Falling burned and blinded through a Siberian sky." },
    { author: "Anna L. Davis", source: "Open Source", quote: "I’d been an outcast my entire life. Growing up with technophobe parents in the dawn of a Cyborg Age did that to a person." },
    { author: "Eric Schmidth", source: "Dystopian Times", quote: "The Internet is the first thing that humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had." },
    { author: "Philip K. Dick", source: "Do Androids Dream of Electric Sheep?", quote: "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity." },
    { author: "William Gibson", source: "Johnny Mnemonic", quote: "It’s impossible to move, to live, to operate at any level without leaving traces, bits, seemingly meaningless fragments of personal information. Fragments that can be retrieved, amplified…" },
    { author: "Lain Iwakura", source: "Serial Experiments: Lain", quote: "No matter where you go, everyone’s connected." },
    { author: "William Gibson", source: "Zero History", quote: "When you want to know how things really work, study them when they’re coming apart." },
    { author: "Jeff Somers", source: "The Electric Church", quote: "Let me show you an endless trail of sunsets." },
    { author: "Roy Batty", source: "Blade Runner", quote: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched c-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "Jack the sound barrier. Bring the noise." },
    { author: "Neal Stephenson", source: "Snow Crash", quote: "Well, all information looks like noise until you break the code." }
];


function phraseMaker () {
  var phraseId = Math.floor(Math.random() * phrases.length);
  var quoteMain = phrases[phraseId].quote;
  var quoteAuthor = phrases[phraseId].author;

  var insertHtml = document.querySelector(".quote-text").innerHTML = quoteMain;
  var insertHtml = document.querySelector(".quote-author").innerHTML = quoteAuthor;

  console.log(quoteMain,quoteAuthor)

}
