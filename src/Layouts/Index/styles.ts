import styled from '@emotion/styled';

export const LayoutsStyled = styled.div`
  @media (min-width: 1080px) {
  }
 
`;

export const HeaderStyled = styled.div`
  display: block;
  width: 65%;
  margin: 25px auto;
  
  .menu-list {
    text-align: center;
    & > .slick-arrow {
      background-color: green;
    }
  }
`;
