import backgroundImage from './background.jpg';

function appendImageDiv() {
  const content = document.getElementById('content');
  const imageDiv = document.createElement('div'); // Create a <li> node
  imageDiv.style.height = '100vh';
  imageDiv.style.width = '50vw';
  imageDiv.style.backgroundImage = `url(${backgroundImage})`;
  imageDiv.style.backgroundSize = 'cover';
  content.appendChild(imageDiv);
}

window.addEventListener('DOMContentLoaded', event => {
  appendImageDiv();
});
