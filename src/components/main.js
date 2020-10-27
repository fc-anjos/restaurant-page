import styles from '../styles/main.module.css';
import backgroundImage from '../assets/background.jpg';
import aboutContent from './about';

function imageDiv() {
  const imageDiv = document.createElement('div');
  imageDiv.classList.add(styles.animatedImg);
  imageDiv.style.height = '100%';
  imageDiv.style.backgroundImage = `url(${backgroundImage})`;
  return imageDiv.outerHTML;
}

function Tab(content, id) {
  const tab = document.createElement('li');
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = content;
  tab.appendChild(btn);
  return tab.outerHTML;
}

const RightSide = () => `
  <div id="right-side">
    <h1 class=${styles.animatedTitle}>
      Commissary
    </h1>
    <ul class=${styles.tabsList}>
      ${Tab('about', 'aboutBtn')}
      ${Tab('menu', 'menuBtn')}
      ${Tab('contact', 'contactBtn')}
    </ul>
    <section id="about">${aboutContent()}</section>
  </div>
  `;


const LeftSide = () => `
  ${imageDiv()}
  `;

const drawMain = () => {
  const content = document.getElementById('content');
  content.classList.add(styles.animationContainer);

  const main = `
    ${LeftSide()}
    ${RightSide()}
  `;
  // styleContent();
  // appendImageDiv();
  content.innerHTML = main;
};

export default drawMain;
