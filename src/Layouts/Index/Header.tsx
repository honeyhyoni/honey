import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from '../../Hooks/reduxHook';
import { HeaderStyled } from './styles';

const Header = (): JSX.Element => {
  const history = useHistory();
  const pages = useSelector((state) => state.page.pages);

  const afterChange = useCallback((currentSlide: number) => {
    history.push(pages[currentSlide].api);
  }, [history.location.pathname]);

  return (
    <HeaderStyled>
      {
        pages.map((ele, ind) => (
          <span
            onClick={() => afterChange(ind)}
            key={ele.title}
            className='url-button'
          >
            {ele.title}
          </span>
        ))
      }
    </HeaderStyled>
  );
};

export default Header;
