import styles from './main.module.css';
import backgroundImage from './background.jpg';

function appendImageDiv() {
  const content = document.getElementById('content');
  content.classList.add(styles.animationContainer);
  const imageDiv = document.createElement('div'); // Create a <li> node
  imageDiv.classList.add(styles.animatedImg);
  imageDiv.style.height = '100%';
  imageDiv.style.backgroundImage = `url(${backgroundImage})`;
  content.appendChild(imageDiv);
}

function createTitle(container) {
  const title = document.createElement('h1');
  title.classList.add(styles.animatedTitle);
  title.innerHTML = 'Commissary';
  title.classList.add(styles.textCenter);
  container.appendChild(title);
  return container;
}

function createRightSide() {
  let rightSide = document.createElement('div');
  rightSide.id = 'right-side';
  rightSide.classList.add(styles.rightSide);
  rightSide = createTitle(rightSide);
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

function changeSectionInnerHtml(content) {
  const section = document.getElementById('section');
  section.innerHTML = content;
}

function addSectionContent(id) {
  const sectionContent = document.createElement('div');
  const title = document.createElement('h1');
  sectionContent.appendChild(title);
  title.innerHTML = id;
  return sectionContent.innerHTML;
}

function createTab(content, sectionContent) {
  const tab = document.createElement('li');
  const btn = document.createElement('button');
  tab.appendChild(btn);
  btn.innerHTML = content;
  btn.addEventListener('click', () => {
    changeSectionInnerHtml(sectionContent);
  });
  return tab;
}


const drawMain = () => {
  appendImageDiv();
};

export {
  drawMain, createTabsList, createTab, addSectionContent,
};
