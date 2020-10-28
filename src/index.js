import drawHome from './components/home';
import AboutContent from './components/about';
import MenuContent from './components/menu';
import ContactContent from './components/contact';

const changeSectionInnerHtml = content => {
  const section = document.getElementById('section-container');
  section.innerHTML = content;
};

const addEventListenertoBtn = (targetBtnId, targetContent) => {
  const btn = document.getElementById(targetBtnId);
  btn.addEventListener('click', () => {
    changeSectionInnerHtml(targetContent());
  });
};


window.addEventListener('DOMContentLoaded', () => {
  drawHome();
  addEventListenertoBtn('contactBtn', ContactContent);
  addEventListenertoBtn('menuBtn', MenuContent);
  addEventListenertoBtn('aboutBtn', AboutContent);
});
