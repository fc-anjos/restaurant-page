import styles from './main.css';
import backgroundImage from './background.jpg';

function appendImageDiv() {
  const content = document.getElementById('content');
  content.classList.add(styles.'animation-container');
  const imageDiv = document.createElement('div'); // Create a <li> node
  imageDiv.classList.add('animated-img');
  imageDiv.style.height = '100vh';
  imageDiv.style.backgroundImage = `url(${backgroundImage})`;
  imageDiv.style.backgroundSize = 'cover';
  imageDiv.style.backgroundPosition = '50% 50%';
  content.appendChild(imageDiv);
}

function createTitle(container) {
  const title = document.createElement('h1');
  title.classList.add('animated-title', 'text-3xl', 'my-2');
  title.innerHTML = 'Commissary';
  title.classList.add('text-center');
  container.appendChild(title);
  return container;
}

function createRightSide() {
  let rightSide = document.createElement('div');
  rightSide.id = 'right-side';
  rightSide.classList.add('right-side');
  rightSide = createTitle(rightSide);
  return rightSide;
}

function createTabsList(tabs) {
  const rightSide = createRightSide();
  const tabsList = document.createElement('ul');
  tabsList.classList.add('tabs-list');
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

function changeSectionInnerHtml(element) {
  const section = document.getElementById('section');
  section.innerHTML = element;
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
  const btn = document.createElement('btn');
  tab.appendChild(btn);
  btn.innerHTML = content;
  btn.addEventListener('click', () => {
    changeSectionInnerHtml(sectionContent);
  });
  return btn;
}

const aboutContent = addSectionContent('About');
const menuContent = addSectionContent('Menu');
const contactContent = addSectionContent('Contact');

const about = createTab('About', aboutContent);
const menu = createTab('Menu', menuContent);
const contact = createTab('Contact', contactContent);

window.addEventListener('DOMContentLoaded', event => {
  appendImageDiv();
  createTabsList([about, menu, contact]);
  addSectionContent('About');
});
