
import { Container, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box } from '@mui/system';

import './style.css'

function Footer(){

    return(
        <>
        <Paper className='p-2 bg-dark text-white col-12' style={{borderRadius:'0px'}} >

            <Container>

                <Box className='col-12 row p-2'>


                <Box className=' col-lg-6 mb-lg-0 mb-2'>

                    <Typography className='footercopyright col-12'>

                      <span><AlternateEmailIcon/> Copyright 2022 | all rights reserved.</span> 

                    </Typography>

                </Box>

                   
                   <Box className='col-lg-6 d-flex justify-content-center align-items-center'>
                       
                  
                        <span className='col-2 mx-2'>

                            <FacebookIcon />

                        </span>

                        <span className='col-2 mx-2'>
                            <TwitterIcon />

                        </span>

                        <span className='col-2 mx-2'>
                            <InstagramIcon />

                        </span>

                    

                    </Box>
                    

                </Box>



            </Container>


        </Paper>
        </>
    )
}

export default Footer