import {
  drawMain,
  createTabsList,
  addSectionContent,
} from './components/main';

import aboutContent from './components/about';

// TODO: change from module content itself
const menuContent = addSectionContent('Menu');
const contactContent = addSectionContent('Contact');


function changeSectionInnerHtml(content) {
  const section = document.getElementById('section');
  section.innerHTML = content;
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


const about = createTab('About', aboutContent());
const menu = createTab('Menu', menuContent);
const contact = createTab('Contact', contactContent);


window.addEventListener('DOMContentLoaded', () => {
  drawMain();
  // createTabsList([about, menu, contact]);
});
