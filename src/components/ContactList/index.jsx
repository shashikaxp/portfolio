import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './ContactList.scss';

const ContactList = () => {
  return (
    <div className="contact-list">
      <a href="https://www.facebook.com">
        <FontAwesomeIcon className="fa-icon" icon={faEnvelope} />
      </a>

      <FontAwesomeIcon className="fa-icon" icon={faGithub} />
      <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
      <FontAwesomeIcon className="fa-icon" icon={faFileAlt} />
    </div>
  );
};

export default ContactList;
