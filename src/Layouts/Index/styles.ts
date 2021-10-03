import styled from '@emotion/styled';

export const LayoutsStyled = styled.div`
  @media screen and (hover: none) and (pointer: coarse) {
    color: pink;
  }
  
  color: blue;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  
  .menu-list {
    text-align: center;
    & > .slick-arrow {
      background-color: inherit;
    }
  }
`;
