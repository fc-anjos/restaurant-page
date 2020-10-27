
import { LoremIpsum } from '../../node_modules/lorem-ipsum';

const randomFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1 + min));

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const genMenuEntry = () => {
  const menuEntry = {
    item: lorem.generateWords(4),
    description: lorem.generateWords(5),
    price: randomFromInterval(5, 80),
  };
  return menuEntry;
};

const genMenuEntries = () => {
  const menuEntries = [];
  for (let i = 0; i < 20; i++) {
    menuEntries.push(genMenuEntry());
  }
  return menuEntries;
};

const menu = genMenuEntries();

const MenuItemTag = menuItem => {
  const { item, description, price } = menuItem;
  return `
  <div>
  <h3>
    ${item}
  </h3>
  <span>
    ${description}
  </span>
  <span>
    ${price}
  </span>
</div>
`;
};

const MenuItemTags = menu.map(MenuItemTag).join('');

const AboutContent = menuItem => `
<div>
  <h2>Menu</h2>
  ${MenuItemTags}
</div>
`;

export default AboutContent;
