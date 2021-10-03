import React from 'react';
import { useSpring, animated } from 'react-spring';
import { AppStyled } from './styles';

const App = (): JSX.Element => {
  const imgProps = useSpring({
    from: { opacity: 0 },
    config: { duration: 2000 },
    loop: {
      opacity: 1,
    },
  });
  const prProps = useSpring({
    from: { y: -50 },
    config: { duration: 1500 },
    loop: {
      y: -20,
    },
  });

  return (
    <AppStyled>
      <div className='main-content'>
        <animated.span
          className='main-img'
          style={imgProps}
        />
        <animated.h4
          className='main-title'
          style={prProps}
        >
          Hi This Is SuHyeon
        </animated.h4>
      </div>
    </AppStyled>
  );
};

export default App;
