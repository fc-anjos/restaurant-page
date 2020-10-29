import styles from '../styles/home.module.css';

const LeftSide = () => `
  <div class="${styles.animatedImg}">
  </div>
  <div class="${styles.credits}">
    <a class="d-block" href="https://unsplash.com/photos/yhn4okt6ci0">
    Commissary restaraunt by @kayleighharrington
    </a>
    <span class="d-block">This is not an official website</span>
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
    <div class=${styles.topRow}>
      <h1 class=${styles.animatedTitle}>
        Commissary
      </h1>
      <ul class=${styles.tabsList}>
        ${Tab({ content: 'about', id: 'aboutBtn' })}
        ${Tab({ content: 'menu', id: 'menuBtn' })}
        ${Tab({ content: 'contact', id: 'contactBtn' })}
      </ul>
    </div>
    <div id="section-container"></div>
  </div>
`;

const drawHome = () => {
  const content = document.getElementById('content');
  content.classList.add(styles.animationContainer);

  const main = `
    ${LeftSide()}
    ${RightSide()}
  `;
  content.innerHTML = main;
};

export default drawHome;
