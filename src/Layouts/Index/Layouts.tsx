import React, { ReactNode } from 'react';
import Header from './Header';

interface Props {
  children: ReactNode
}

const Layouts = ({ children }: Props): JSX.Element => (
  <div>
    <Header />
    {children}
  </div>
);
export default Layouts;
