import { ReactLenis } from 'lenis/react'
import './css/global.css'
import { ThemeProvider } from '@mui/material';
import Theme from "./theme/ThemeProvider";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Content from './components/Content'
import Footer from './components/Footer';

function App() {
    return (
      <ReactLenis root>
        <ThemeProvider theme={Theme}>
          <Navbar />
          <Home />
          <Content />
          <Footer />  
        </ThemeProvider>
      </ReactLenis>
    )
}

export default App
