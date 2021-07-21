import React from 'react';
import GlobalStyle from './styles/global';

import Sign from './pages/Signin';

const App: React.FC = () => {
  return (
    <>
      <Sign />
      <GlobalStyle />
    </>
    );
};

export default App;
