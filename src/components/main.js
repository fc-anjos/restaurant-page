import styles from '../styles/main.module.css';
import backgroundImg from '../assets/background.jpg';

const LeftSide = () => `
  <div
  class="${styles.animatedImg}"
  style="background-image: url(${backgroundImg})"
  >
  </div>
`;

const Tab = props => {
  const { content, id } = props;
  return `
  <li>
    <button id="${id}">
      ${content}
    </button>
  </li>
`;
};

const RightSide = () => `
  <div id="right-side" class="${styles.rightSide}">
    <h1 class=${styles.animatedTitle}>
      Commissary
    </h1>
    <ul class=${styles.tabsList}>
      ${Tab({ content: 'about', id: 'aboutBtn' })}
      ${Tab({ content: 'menu', id: 'menuBtn' })}
      ${Tab({ content: 'contact', id: 'contactBtn' })}
    </ul>
    <div id="section-container"></div>
  </div>
`;

const drawMain = () => {
  const content = document.getElementById('content');
  content.classList.add(styles.animationContainer);

  const main = `
    ${LeftSide()}
    ${RightSide()}
  `;
  content.innerHTML = main;
};

export default drawMain;
