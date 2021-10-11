import styled from '@emotion/styled';

export const LayoutsStyled = styled.div`
  @media screen and (hover: none) and (pointer: coarse) {
  }
  width: 100vw;
  height: 100vh;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20vw;
  
  .url-button {
    color: black;
    font-weight: 700;
    font-size: 18px;
    
    cursor: pointer;
  }
`;
