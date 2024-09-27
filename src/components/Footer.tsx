import { Grid2, Box, Typography, Link } from "@mui/material";
import { LittleLogo } from "../assets/images/images";

function Footer() {
  return (
    <Box
    sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        padding: {
            lg: '3vw',
            md: '4vw',
            sm: '5vw',
            xs: '7vw',
        }
       }}>
        <Grid2 container>
            {/* First */}
            <Grid2 size={{lg: 7, md:7, sm:7, xs:12 }}>

                {/* Logo */}
                <img src={LittleLogo}  />

                {/* Text */}
                <Typography component="div" sx={{fontSize:'1rem', marginTop:'2vh'}}>
                    Get out there & discover your next <br/>
                    slope, mountain & destination!
                </Typography>

                {/* Copyright */}
                <Typography 
                sx={{
                    opacity: '0.1', 
                    fontSize:'1rem', 
                    marginTop:{
                        lg:'20vh',
                        md:'20vh',
                        sm:'20vh',
                        xs:'5vh',
                    },
                    marginBottom:{
                        lg:'0vh',
                        md:'0vh',
                        sm:'0vh',
                        xs:'10vh',
                    }
                }}>
                    Copyright 2024 MNTN, Inc. Terms & Privacy
                </Typography>
                
            </Grid2>

            {/* Second */}
            <Grid2 size={{lg: 3, md:3, sm:3, xs:6 }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap:'1.8vw',
            }}>
                {/* Title */}
                <Typography component="div" className="h2" sx={{color:'#FBD784', fontSize:'1.3rem'}}>
                    More on The Blog
                </Typography>

                {/* Links */}
                <Link href="#">
                    About MNTN
                </Link>

                <Link href="#">
                    Contributors & Writers
                </Link>

                <Link href="#">
                    Write For Us
                </Link>

                <Link href="#">
                    Contact Us
                </Link>

                <Link href="#">
                    Privacy Policy
                </Link>
            </Grid2>

            {/* Third */}
            <Grid2 size={{lg: 2, md:2, sm:2, xs:6 }}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap:'1.8vw'
            }}>
                {/* Title */}
                <Typography component="div" className="h2" sx={{color:'#FBD784', fontSize:'1.3rem'}}>
                    More on MNTN
                </Typography>

                {/* Links */}
                <Link href="#">
                    The Team
                </Link>

                <Link href="#">
                    Jobs
                </Link>

                <Link href="#">
                    Press
                </Link>
            </Grid2>
        </Grid2>
    </Box>
  );
};

export default Footer