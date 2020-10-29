import { LoremIpsum } from '../../node_modules/lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 5,
    min: 2,
  },
});

const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1 + min));


export { randomFromInterval, lorem };
