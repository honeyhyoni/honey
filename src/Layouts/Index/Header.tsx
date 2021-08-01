import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../Hooks/reduxHook';

const Header = (): JSX.Element => {
  const pages = useSelector((state) => state.page.pages);

  return (
    <>
      {pages.map(((page) => (
        <Link to={page.api} key={page.api}>{page.label}</Link>
      )))}
    </>
  );
};

export default Header;
