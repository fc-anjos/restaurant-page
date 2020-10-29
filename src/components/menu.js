import styles from '../styles/menu.module.css';
import { lorem, randomFromInterval } from '../utils/utils';

const genMenuEntry = () => {
  const menuEntry = {
    item: lorem.generateSentences(1),
    description: lorem.generateSentences(2).split('.').join(', ') + lorem.generateSentences(1).toLowerCase(),
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
      <div class="${styles.conectingLine}"></div>
      <span class="${styles.price}">
        ${price}$
      </span>
    </div>
  <span class="${styles.description}">
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

const softdrinks = genMenuEntries(4);
const softdrinksTags = softdrinks.map(MenuItemTag).join('');

const desserts = genMenuEntries(3);
const dessertsTags = desserts.map(MenuItemTag).join('');

const MenuContent = () => `
  <div class="${styles.menuContainer}">
    <h2>Menu</h2>

    <div class="${styles.menuFlex}">
      <div class=${styles.leftSide}>
        <div>
          <h3>Entrées</h3>
          ${EntreesTags}
        </div>
        <div>
          <h3>Main Dishes</h3>
          ${mainTags}
        </div>
    </div>

      <div class=${styles.rightSide}>

        <div>
          <h3>Cocktails</h3>
          ${cocktailsTags}
        </div>

        <div>
          <h3>softdrinks</h3>
          ${softdrinksTags}
        </div>

        <div>
          <h3>Desserts</h3>
          ${dessertsTags}
        </div>

      <div class=${styles.rightSide}>
    </div>
  </div>
</div>
`;

export default MenuContent;
