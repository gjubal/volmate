import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Nav, NavContent, Box } from './styles';

import Button from '../Button';

interface HeaderProps {
  type: 'main' | 'form' | 'popup';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  redirectTo?: string;
  onButtonClick?(): void;
}

const Header: React.FC<HeaderProps> = ({
  type,
  title,
  subtitle,
  buttonText,
  redirectTo,
  onButtonClick,
}) => {
  const history = useHistory();

  return (
    <>
      {type === 'main' && (
        <Nav>
          <NavContent type={type}>
            <h1>{title}</h1>

            {redirectTo && (
              <Link to={redirectTo}>
                <Button onClick={() => history.push('/dashboard')}>
                  {buttonText}
                </Button>
              </Link>
            )}
          </NavContent>
        </Nav>
      )}
      {type === 'form' && (
        <Nav>
          <NavContent type={type}>
            <Link to="/dashboard/businesses">
              <Box>
                <FiArrowLeft />
              </Box>
            </Link>

            <h2>{subtitle}</h2>
          </NavContent>
        </Nav>
      )}
      {type === 'popup' && (
        <Nav>
          <NavContent type={type}>
            <h1>{title}</h1>

            {onButtonClick && (
              <Button onClick={onButtonClick}>{buttonText}</Button>
            )}
          </NavContent>
        </Nav>
      )}
    </>
  );
};

export default Header;
