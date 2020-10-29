import styles from '../styles/about.modules.css';
import { lorem, randomFromInterval } from '../utils/utils';

const aboutInfo = {
  question: lorem.generateSentences(2).replace(/\.$/, ''),
  text: lorem.generateParagraphs(5),
};

const genAboutTags = props => {
  const { text, question } = props;
  return `
    <div class="${styles.aboutContainer}">
      <h2>About</h2>
      <div class="${styles.question}">
        ${question}?
      </div>
      <div>
        ${text}
      </div>
    </div>
  `;
};

const aboutContent = () => genAboutTags(aboutInfo);

export default aboutContent;
