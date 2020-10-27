import drawMain from './components/main';

// function changeSectionInnerHtml(content) {
//   const section = document.getElementById('section');
//   section.innerHTML = content;
// }

// function createTab(content, sectionContent) {
//   const tab = document.createElement('li');
//   const btn = document.createElement('button');
//   tab.appendChild(btn);
//   btn.innerHTML = content;
//   btn.addEventListener('click', () => {
//     changeSectionInnerHtml(sectionContent);
//   });
//   return tab;
// }


window.addEventListener('DOMContentLoaded', () => {
  drawMain();
  // createTabsList([about, menu, contact]);
});
