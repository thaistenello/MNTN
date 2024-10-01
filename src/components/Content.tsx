import { Box, Typography, Link } from '@mui/material';
import { RightArrow, OneImage, TwoImage, ThreeImage } from '../assets/images/images';
import DataContent from './DataContent.json';


interface DataItem {
  id: number;
  number: string;
  subtitle: string;
  title: string;
  text: string;
}

interface ImageSectionProps {
  img: string;
}

// Text Select
const TextSection: React.FC<DataItem> = ({ number, subtitle, title, text }) => (
  <Box
  sx={{
    position: 'relative',
    maxWidth: {
      lg: '45%',
      md: '50%',
      sm: '55%',
      xs: '70%'

    },
    textAlign: 'left',
    zIndex: 150, 
  }}>
    {/* Number */}
    <Box 
    sx={{ 
      position: 'absolute', 
      top: {
        lg: '-4rem',
        md: '-3rem',
        sm: '-2rem',
        xs: '-2.5rem'
      }, 
      left: {
        lg: '-6rem',
        md: '-4rem',
        sm: '-2rem',
        xs: '-1.5rem',
      } 
    }}>
      <Typography variant="h3">
        {number}
      </Typography>
    </Box>

    {/* Subtitle */}
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        textAlign: 'left', 
        alignItems: 'flex-start', 
        gap: '.5rem' 
      }}
    >
      <Typography 
        component="div" 
        sx={{ 
          display: 'flex', 
          textTransform: 'uppercase', 
          fontWeight: 600, 
          letterSpacing: '0.37rem', 
          color: '#FBD784', 
          gap: '1rem' 
        }}
      >
        <Box className="line" />
        {subtitle}
      </Typography>

      <Typography component="div" variant="h2" sx={{ textTransform: 'capitalize' }}>
        {title}
      </Typography>

      <Typography sx={{ overflowWrap: 'break-word' }}>
        {text}
      </Typography>

      <Link 
        sx={{ 
          color: '#FBD784', 
          display: 'flex', 
          alignItems: 'center', 
          textDecoration: 'none', 
          fontSize: '1.2rem', 
          '&:hover': { color: '#F9C13E' } 
        }}
        href="#">

        read more

        <img src={RightArrow} alt="Right Arrow" style={{ marginLeft: '0.5rem' }} />
      </Link>
    </Box>
  </Box>
);

// Image Select
const ImageSection: React.FC<ImageSectionProps> = ({ img }) => (
  <Box sx={{ 
    width: {
      lg: '25rem',
      md: '25rem',
      sm: '20rem',
      xs: '20rem'
    }, 
    height:{
      lg: '30rem',
      md: '30rem',
      sm: '25rem',
      xs: '25rem'
    },
    zIndex: 150, 
  }}>
    <img src={img} style={{ width: '100%', display: 'block'  }} alt="Content" />
  </Box>
);


const Content: React.FC = () => {
  const images = [OneImage, TwoImage, ThreeImage];
  
  return (
    <>
      {/* Container */}
      <Box
        className="flexCenter"
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: 'auto',
          marginBottom: '30vh',
          gap:{
            lg: '50vh',
            md: '40vh',
            sm: '30vh',
            xs: '30vh'
          },
          zIndex: 500,
        }}
      >
        {/* Content */}
        {DataContent.map((result: DataItem, index: number) => (
          <Box className="flexCenter" key={result.id} id={`section${result.id}`}
            sx={{
              position: 'relative', 
              gap: {
                lg: '8rem',
                md: '5rem',
                sm: '2rem',
                xs: '5rem'
              },
              paddingInline: {
                sm: '15vw',
              },
              flexDirection:{
                lg: index % 2 === 0 ? 'row' : 'row-reverse',
                md: index % 2 === 0 ? 'row' : 'row-reverse',
                sm: index % 2 === 0 ? 'row' : 'row-reverse',
                xs: 'column',
              } 
            }}>
              
            <TextSection {...result} />
            <ImageSection img={images[index]} />

          </Box>
        ))}
      </Box>
    </>
  );
};

export default Content;