import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import Api from '../api';

import { useDispatch } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import MobileHeader from './mobheader';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {

    const [search,setSearch]= React.useState("")

    const dispatch = useDispatch()

    

    const apikey = 'eb8b4615ae3847feabf579af394eab0a'
    const SearchResult=(event)=>{

        setSearch(event.target.value)

        Api.get(`https://newsapi.org/v2/everything?q=${event.target.value}&apiKey=${apikey}`).then(res=>{
         
            dispatch({
                type:"search",
                payload:res.data
            })
        })



    }



  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className='bg-light text-dark p-2' >

            <Container>

            <Box className='d-lg-block d-none'>
            <Box className='d-flex flex-lg-row flex-column justify-content-between align-items-center'>

            <Typography variant="h6" className='fw-bold text-uppercase' component="div">
                News Portal
             </Typography>

             <Typography>

                
                <div className="input-group mt-lg-0 mt-2">
                <span className="input-group-text" id="basic-addon1">
                    <SearchIcon />
                </span>
                <input type="search"   value = {search}
                onChange={(event)=>SearchResult(event)} 
                className="form-control shadow-none" 
                placeholder="Search ..."
                 aria-label="Username"
                  aria-describedby="basic-addon1" />
                
                </div>

             </Typography>

            </Box>

            </Box>

            <Box className='d-lg-none d-block'>

                <MobileHeader />

            </Box>
          


            </Container>
         
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}
