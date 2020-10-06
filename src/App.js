import React from 'react';

import Layout from './components/Layouts/Layouts';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';


function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
