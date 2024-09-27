
import React, { useEffect, useRef } from 'react';
import '../css/components.css';
import { Box, Grid2, Button, Typography, Link } from '@mui/material';
import { Instagram, Twitter, DownArrow, SliderIndicator, SliderBg, Bg, Mountain } from '../assets/images/images';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Lenis Scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger
    const gsapScrollTrigger = gsap.fromTo(
      textRef.current,
      { y: 0 },
      {
        y: 700,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 3,
          onUpdate: self => {
            // Reset
            if (self.progress === 1) {
              gsap.set(textRef.current, { y: 0 });
            }
          },
        },
      }
    );

    return () => {
      lenis.destroy();
    };
  }, []);

  //Disable ScrollTrigger
  const handleClick = (id: string) => {
    ScrollTrigger.getAll().forEach(trigger => trigger.disable());
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      ScrollTrigger.getAll().forEach(trigger => trigger.enable());
    }, 1000);
  };

  return (
    <Box
      //Background Image
      sx={{
        position: 'relative',
        width: '100%',
        height: '150vh',
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: {
          lg: '100% 100%',
          md: '100% 100%',
          sm: '100% 100%',
          xs: 'auto 100%'
        },
        zIndex: '1',
      }}>
      
      {/* Contain central */}
      <Grid2 container className="flexCenter"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '50vh',
        marginTop: '25vh',
        paddingInline: {
          lg: '0',
          md: '1vw',
          sm: '0',
          xs: '5vw',
        },
      }}>

        {/* Social */}
        <Grid2 size={{lg: 1, md: 1, sm: 1, xs:12}}
        className="flexCenter"
          sx={{
            position: 'relative',
            flexDirection: { 
              lg: 'column', 
              md: 'column', 
              sm: 'column', 
              xs: 'row' },
            gap: {
              lg: '1.5vw',
              md: '2vw',
              sm: '2.5vw',
              xs: '0'
            },
            marginTop:{
              lg: '0',
              md: '0',
              sm: '0',
              xs: '20vh'
            },
            zIndex: 100,
            order: { 
              lg: 0, 
              md: 0, 
              sm: 0, 
              xs: 2 },
          }}>
          <Typography component="div"
            sx={{
              width: 'fit-content',
              whiteSpace: 'nowrap',
              transform: { 
                lg: 'rotate(90deg)', 
                md: 'rotate(90deg)', 
                sm: 'rotate(90deg)',
                xs: 'none'
              },
              marginBottom: { 
                lg: '1.9vw',
                md: '2.2vw',
                sm: '3vw',
                xs: '0' 
              },
              color: '#ced4da',
            }}>

            Follow us
            
          </Typography>

          <Button onClick={() => window.open('#', '_blank')} style={{ padding: 0 }}>
            <img src={Instagram} alt="Instagram" />
          </Button>

          <Button onClick={() => window.open('#', '_blank')} style={{ padding: 0 }}>
            <img src={Twitter} alt="Twitter" />
          </Button>
        </Grid2>

        {/* Title */}
        <Grid2 
        className="flexCenter" ref={textRef} 
        sx={{ 
          flex: 1, 
          marginLeft: {
            lg: '4rem',
            md: '4rem',
            sm: '4rem',
            xs: '0'
          } 
        }}>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              textAlign: 'left',
              gap: '.5rem',
            }}
          >
            <Typography component="div"
              sx={{
                display: 'flex',
                textTransform: 'uppercase',
                fontWeight: '600',
                fontSize: '1rem',
                letterSpacing: '0.37rem',
                color: '#FBD784',
                gap: '1rem',
              }}
            >
              <Box className="line" />
              A Hiking guide
            </Typography>
            <Typography component="div" variant="h1" sx={{ textTransform: 'capitalize' }}>
              Be prepared for the <br />
              Mountains and beyond!
            </Typography>
            <Typography
              component="div"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                fontWeight: '300',
                gap: '.5rem',
                color: '#ced4da',
              }}
            >
              scroll down
              <img src={DownArrow} alt="Down Arrow" />
            </Typography>
          </Box>
        </Grid2>

        {/* Right menu */}
        <Grid2 size={{lg: 1, md: 1, sm: 1.5, xs:1}}
        sx={{ 
          display: 'flex',
          width: '8vw',
          marginRight: {
            lg: '0',
            md: '0',
            sm: '0',
            xs: '8vw',
          },
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.7rem',
              marginTop: '1rem',

              zIndex: 100,
            }}
          >
            <Typography component="div" sx={{ fontSize: '1.2rem' }}>
              Start
            </Typography>

            <Button className="button" style={{ padding: '0' }} onClick={() => handleClick('section1')}>
              <Link href="#">01</Link>
            </Button>
            <Button className="button" style={{ padding: '0' }} onClick={() => handleClick('section2')}>
              <Link href="#">02</Link>
            </Button>
            <Button className="button" style={{ padding: '0' }} onClick={() => handleClick('section3')}>
              <Link href="#">03</Link>
            </Button>
          </Box>

          <Box sx={{ width: '1rem', display: 'flex', alignItems: 'flex-start' }}>
            <img src={SliderIndicator} style={{ position: 'relative' }} alt="Slider Indicator" />
            <img src={SliderBg} style={{ position: 'absolute' }} alt="Slider Background" />
          </Box>
        </Grid2>
      </Grid2>

      {/* Mountain Parallax */}
      <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundImage: `url(${Mountain})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: {
          lg: '100%',
          md: '100%',
          sm: '100%',
          xs: 'center 40%'
        },
        zIndex: 10,
        marginTop:{
          lg: '70vh',
          md: '70vh',
          sm: '70vh',
          xs: '70vh'
        }
      }}/>
    </Box>
  );
};

export default Home;
