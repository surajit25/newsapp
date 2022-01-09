import { Box } from "@mui/system"

import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@mui/material";

import Mobilesearchbar from './mobsearch'

function  MobileHeader(){

    return(
        <>
        <Box className='col-12 d-flex'>

            <Box>
               <MenuIcon />
            </Box>

            <Box className='mx-3'>
                <Typography className="fw-bold text-uppercase">
                    News Portal
                </Typography>

            </Box>



        </Box>

         <Mobilesearchbar />


        </>
    )
}

export default MobileHeader