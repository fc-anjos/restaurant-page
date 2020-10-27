import {
  drawMain, createTabsList, createTab, addSectionContent,
} from './main';


const aboutContent = addSectionContent('About');
const menuContent = addSectionContent('Menu');
const contactContent = addSectionContent('Contact');

const about = createTab('About', aboutContent);
const menu = createTab('Menu', menuContent);
const contact = createTab('Contact', contactContent);

window.addEventListener('DOMContentLoaded', () => {
  drawMain();
  createTabsList([about, menu, contact]);
});
