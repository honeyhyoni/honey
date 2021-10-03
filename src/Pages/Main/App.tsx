import React from 'react';
import { useSpring, animated } from 'react-spring';
import { AppStyled } from './styles';

const App = (): JSX.Element => {
  const styleProps = useSpring({
    from: { opacity: 0 },
    config: { duration: 1600 },
    loop: {
      opacity: 1,
    },
  });

  return (
    <AppStyled>
      <animated.div
        className='main-content'
        style={styleProps}
      >
        <span className='main-img' />
        <h4 className='main-title'>
          Hi This Is SuHyeon
        </h4>
      </animated.div>
    </AppStyled>
  );
};

export default App;
