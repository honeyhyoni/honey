import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../Hooks/reduxHook';
import { HeaderStyled } from './styles';

const Header = (): JSX.Element => {
  const pages = useSelector((state) => state.page.pages);

  return (
    <HeaderStyled>
      {pages.map(((page) => (
        <Link to={page.api} key={page.api}>{page.label}</Link>
      )))}
    </HeaderStyled>
  );
};

export default Header;
