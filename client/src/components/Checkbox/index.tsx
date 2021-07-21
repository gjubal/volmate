import React, { InputHTMLAttributes } from 'react';

import { Bottom, Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <div>
        <input type="checkbox" id={name} {...rest} />
      </div>

      <Bottom>
        <label htmlFor={name}>{label}</label>
      </Bottom>
    </Container>
  );
};

export default Checkbox;
