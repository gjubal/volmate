import React from 'react';

import whatsappIcon from '../../assets/whatsappIcon.svg';
import { Article, Footer, Header } from './styles';

const VolunteerCard: React.FC = () => {
  return (
    <Article>
      <Header>
        <img
          src="https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
          alt="Barry Allen"
        />
        <div>
          <strong>Barry Allen</strong>
          <span>Chemistry tutoring</span>
        </div>
      </Header>
      <p>
        Expositive & detailed tutoring for Chemistry.
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nemo
        veritatis ad aliquam expedita eum modi, labore, obcaecati beatae illum
        inventore soluta dignissimos eligendi voluptates sapiente, ex dolorem
        tempora fuga.
      </p>

      <Footer>
        <p>
          Building/room
          <strong>22/105</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Message
        </button>
      </Footer>
    </Article>
  );
};

export default VolunteerCard;
