import React, { ButtonHTMLAttributes } from 'react';

import { FiEdit, FiTrash } from 'react-icons/fi';

import { Box } from './styles';

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: 'edit' | 'remove';
}

const CardIcon: React.FC<CardProps> = ({ label, onClick }) => {
  return (
    <Box onClick={onClick}>{label === 'edit' ? <FiEdit /> : <FiTrash />}</Box>
  );
};

export default CardIcon;
