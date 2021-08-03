import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from '../../Hooks/reduxHook';
import { HeaderStyled } from './styles';

const Header = (): JSX.Element => {
  const pages = useSelector((state) => state.page.pages);

  return (
    <HeaderStyled>
      <ul className='menu-list'>
        {pages.map(((page) => (
          <li className='menu-item' key={page.api}>
            <Link to={page.api}>
              <p className='menu-item-title'>
                {page.label}
                {' '}
                {page.subTitle && (
                  <span className='menu-item-sub-title'>
                    (&nbsp;
                    {page.subTitle}
                      &nbsp;)
                  </span>
                )}
              </p>
            </Link>
          </li>
        )))}
      </ul>
    </HeaderStyled>
  );
};

export default Header;
