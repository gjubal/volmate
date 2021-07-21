import React, { InputHTMLAttributes } from 'react';
import {
  FiBriefcase,
  FiCoffee,
  FiMoon,
  FiShoppingCart,
  FiSun,
} from 'react-icons/fi';

import { Bottom, Container } from './styles';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: 'restaurant' | 'office' | 'store' | 'morning' | 'night';
  label: string;
}

const Radio: React.FC<RadioProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <div>
        {name === 'store' && <FiShoppingCart color="#69cf9c" size={30} />}
        {name === 'office' && <FiBriefcase color="#69cf9c" size={30} />}
        {name === 'restaurant' && <FiCoffee color="#69cf9c" size={30} />}
        {name === 'morning' && <FiSun color="#69cf9c" size={30} />}
        {name === 'night' && <FiMoon color="#69cf9c" size={30} />}
        <input type="radio" id={name} {...rest} />
      </div>

      <Bottom>
        <label htmlFor={name}>{label}</label>
      </Bottom>
    </Container>
  );
};

export default Radio;
