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
    display: flex;
    justify-content: space-between;
  }
  
  .menu-item {
    padding: 7px;
   }
   
  .menu-item-title {
    font-size: 20px;
    text-shadow: 1px 1px #9e9e9e63;   
   }
   
  .menu-item-sub-title{
    font-size: 16px;
  }
`;
