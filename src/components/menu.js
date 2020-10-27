import styles from '../styles/menu.module.css';
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

const genMenuEntries = nEntries => {
  const menuEntries = [];
  for (let i = 0; i < nEntries; i += 1) {
    menuEntries.push(genMenuEntry());
  }
  return menuEntries;
};


const MenuItemTag = menuItem => {
  const { item, description, price } = menuItem;
  return `
  <div class="${styles.menuEntry}">
    <div class="${styles.topLine}">
      <h4>
        ${item}
      </h4>
      <span class="${styles.price}">
        ${price}$
      </span>
    </div>
  <span>
    ${description}
  </span>
</div>
`;
};


const entrees = genMenuEntries(5);
const EntreesTags = entrees.map(MenuItemTag).join('');

const mains = genMenuEntries(7);
const mainTags = mains.map(MenuItemTag).join('');

const cocktails = genMenuEntries(4);
const cocktailsTags = cocktails.map(MenuItemTag).join('');

const MenuContent = () => `
<div class="${styles.menuContainer}">
  <h2>Menu</h2>

  <div>
    <h3>Entrées</h3>
    ${EntreesTags}
  </div>

  <div>
    <h3>Main Dishes</h3>
    ${mainTags}
  </div>

  <div>
    <h3>Cocktails</h3>
    ${cocktailsTags}
  </div>
</div>
`;

export default MenuContent;
