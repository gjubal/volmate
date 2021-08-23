import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/logo-up-dashboard.svg';
import { Header, HeaderContent, TopBarContainer } from './styles';

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <FiArrowLeft color="white" />
        </Link>
        <img src={logoImage} alt="Volmate" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
