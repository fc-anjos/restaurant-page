import styles from '../styles/contact.module.css';
import { lorem, randomFromInterval } from '../utils/utils';

const contactInfo = {
  sentence: lorem.generateSentences(1),
  address: lorem.generateSentences(2),
  number: randomFromInterval(20, 100),
  telephone: '650-555-0119',
  email: `${lorem.generateWords(1)}@${lorem.generateWords(1)}.com`,
};

const genContactTags = props => {
  const {
    sentence, address, telephone, email, number,
  } = props;
  return `
  <h2>Contact</h2>
  <div class="${styles.contactContainer}">
    <span>${contactInfo.sentence}</span>
    <div class="${styles.infoTitle}">
      Address:
    </div>
    <div>
      ${props.address}
      ${props.number}
    </div>
    <div>
      <div class="${styles.infoTitle}">
        Telephone:
      </div>
      ${props.telephone}
    </div>
    <div>
      <div class="${styles.infoTitle}">
        E-mail:
      </div>
      ${props.email}
    </div>
    <div>
      <div class="${styles.infoTitle}">
        Opening hours:
      </div>
      Thu-Sun: 17pm-01am
    </div>
  </div>
`;
};

const ContactContent = () => genContactTags(contactInfo);
export default ContactContent;
