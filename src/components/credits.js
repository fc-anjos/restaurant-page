import styles from '../styles/credits.module.css';

const drawCredits = parentNode => {
  const creditsContainer = document.createElement('div');
  creditsContainer.className = styles.credits;
  const link = document.createElement('a');
  link.href = 'https://unsplash.com/photos/yhn4okt6ci0';
  link.textContent = 'Commissary restaraunt by @kayleighharrington';
  const span = document.createElement('span');
  span.textContent = 'This is not an official website';
  creditsContainer.appendChild(link);
  creditsContainer.appendChild(span);
  parentNode.appendChild(creditsContainer);
};

export { drawCredits as default };
