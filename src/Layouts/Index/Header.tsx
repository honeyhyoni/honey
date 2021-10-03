import React from 'react';
import { useSelector } from '../../Hooks/reduxHook';
import { HeaderStyled } from './styles';

const Header = (): JSX.Element => {
  const pages = useSelector((state) => state.page.pages);

  return (
    <HeaderStyled>
      {
        pages.map((ele) => (
          <a href={ele.api} key={ele.title}>
            {ele.title}
          </a>
        ))
      }
    </HeaderStyled>
  );
};

export default Header;
