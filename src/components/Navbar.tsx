import { useState } from 'react';
import { AppBar, Box, Link, Toolbar, IconButton } from '@mui/material';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import Person from '../assets/images/IconPerson.png';

interface LinkItem {
  text: string;
  href: string;
}

//Links
const links: LinkItem[] = [
  { text: 'Equipament', href: '#' },
  { text: 'About Us', href: '#' },
  { text: 'Blog', href: '#' }
];


function Navbar() {
  //Open and Close responsively Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowLogoAnimation(true);
  };

  return (
    <AppBar
      sx={{
        position: 'fixed',
        width: '100%',
        px: { lg: '5rem', xs: '1rem' },
        py: '1rem',
        bgcolor: 'transparent',
        boxShadow: 'none',
        border: 'none',
        zIndex: 2000,
      }}>

      <Toolbar sx={{ height: '4rem', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box>
          <Logo aria-label="Logo" />
        </Box>

        {/* Links */}
        <Box 
        sx={{ 
          display: { 
            xs: 'none',
             md: 'flex' 
          }, 
          gap: '2.8rem', 
          fontFamily: 'Gilroy-Medium, sans-serif' 
        }}>
          {links.map((link) => (
            <Link key={link.text} sx={{ color: '#ced4da', zIndex: 2000 }} 
            href={link.href}>
              {link.text}
            </Link>
          ))}
        </Box>

        {/* Account */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link sx={{ color: '#ced4da', display: 'flex', alignItems: 'center', gap: '.5vw' }} 
          href="#">
            <img src={Person} alt="Account" />
            Account
          </Link>
        </Box>

        {/*Responsively icon*/}
        <IconButton
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
          sx={{ 
            position: 'absolute', 
            display: { 
              xs: 'flex', 
              md: 'none' 
            }, 
            color: '#ced4da', 
            zIndex: '1000', 
            right: '1vw' 
          }}>

          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      {/* Responsively Menu */}
      {isMenuOpen && (
        <Box className="flexCenter"
          sx={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            right: 0,
            flexDirection: 'column',
            textAlign: 'center',
            bgcolor: '#1f1f1f',
            zIndex: 1000,
          }}>

          {/* Logo Animation */}
          <AnimatePresence>
            {showLogoAnimation && (
              <motion.div className="flexCenter"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onAnimationComplete={() => setShowLogoAnimation(false)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#0B1D26',
                  zIndex: 100,
                }}>

                <Logo aria-label="Logo" style={{ width: '30%', height: 'auto' }} />
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Close Button */}
          <IconButton aria-label="Close menu" onClick={toggleMenu} 
          sx={{ 
            position: 'absolute', 
            top: '1rem', 
            right: '1rem', 
            color: '#fff' 
          }}>
            <CloseIcon />
          </IconButton>

          {!showLogoAnimation && (
            <Box className="flexCenter"
              sx={{
                flexDirection: 'column',
                gap: '6vh',
              }}>

              {/* Links */}
              {links.map((link) => (
                <Link
                  key={link.text}
                  onClick={toggleMenu}
                  href={link.href}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1.2rem',
                    width: '100%',
                    padding: '1vh',
                  }}>
                  {link.text}
                </Link>
              ))}

              {/* Account */}
              <Link className="flexCenter" onClick={toggleMenu}
              href="#"
                sx={{
                  color: '#fff',
                  textDecoration: 'none',
                  width: '100%',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                  gap: '1vw',
                  marginTop: '5vh',
                }}>

                <img src={Person} alt="Account" />

                Account

              </Link>
            </Box>
          )}
        </Box>
      )}
    </AppBar>
  );
}

export default Navbar;