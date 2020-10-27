import styles from '../styles/main.module.css';
import backgroundImage from '../assets/background.jpg';

function styleContent() {
  const content = document.getElementById('content');
}

function imageDiv() {
  const imageDiv = document.createElement('div'); // Create a <li> node
  imageDiv.classList.add(styles.animatedImg);
  imageDiv.style.height = '100%';
  imageDiv.style.backgroundImage = `url(${backgroundImage})`;
  return imageDiv.outerHTML;
}

function createTitle() {
  const title = document.createElement('h1');
  title.classList.add(styles.animatedTitle);
  title.innerHTML = 'Commissary';
  title.classList.add(styles.textCenter);
  return title.outerHTML;
}

function createRightSide() {
  const rightSide = document.createElement('div');
  rightSide.id = 'right-side';
  rightSide.classList.add(styles.rightSide);
  rightSide.innerHTML = createTitle();
  return rightSide;
}

function createTabsList(tabs) {
  const rightSide = createRightSide();
  const tabsList = document.createElement('ul');
  tabsList.classList.add(styles.tabsList);
  tabs.forEach(tab => {
    tabsList.appendChild(tab);
  });
  rightSide.appendChild(tabsList);
  const content = document.getElementById('content');
  const section = document.createElement('section');
  section.id = 'section';
  rightSide.appendChild(section);
  content.appendChild(rightSide);
}

function addSectionContent(id) {
  const sectionContent = document.createElement('div');
  const title = document.createElement('h1');
  sectionContent.appendChild(title);
  title.innerHTML = id;
  return sectionContent.innerHTML;
}

const rightSide = () => `
  <div>Rightiside</div>
  `;


const leftSide = () => `
  ${imageDiv()}
  `;


const drawMain = () => {
  const content = document.getElementById('content');
  content.classList.add(styles.animationContainer);

  const main = `
    ${leftSide()}
    ${rightSide()}
  `;
  // styleContent();
  // appendImageDiv();
  content.innerHTML = main;
};

export {
  drawMain, createTabsList, addSectionContent,
};
