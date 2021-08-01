import React, { ReactNode } from 'react';
import Header from './Header';
import { LayoutsStyled } from './styles';

interface Props {
  children: ReactNode
}

const Layouts = ({ children }: Props): JSX.Element => (
  <LayoutsStyled>
    <Header />
    {children}
  </LayoutsStyled>
);
export default Layouts;
