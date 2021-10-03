import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import { useSelector } from '../../Hooks/reduxHook';
import { HeaderStyled } from './styles';

const Header = (): JSX.Element => {
  const history = useHistory();

  const pages = useSelector((state) => state.page.pages);
  const slickIndex = pages.map((ele) => ele.api).indexOf(history.location.pathname);

  const afterChange = useCallback((currentSlide: number) => {
    history.push(pages[currentSlide].api);
  }, [history.location.pathname]);

  const settings = {
    infinite: true,
    speed: 500,
    initialSlide: slickIndex,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '10px',
    className: 'menu-list',
    afterChange,
  };

  return (
    <HeaderStyled>
      <Slider {...settings}>
        {pages.map((page) => (
          <div key={page.api}>
            <p className='menu-item-title'>
              {page.title}
              {' '}
              {page.subTitle && (
                <span className='menu-item-sub-title'>
                  (&nbsp;
                  {page.subTitle}
                  &nbsp;)
                </span>
              )}
            </p>
          </div>
        ))}
      </Slider>
    </HeaderStyled>
  );
};

export default Header;
