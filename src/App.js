import { Grommet, Box } from 'grommet'
import { hpe } from 'grommet-theme-hpe';
import { Footer } from './components';
import React from "react";

function App() {
  return (
    <Grommet className="App" theme={hpe} full>
      <Box >
       <Footer />
      </Box>
    </Grommet>
  );
}

export default App;
