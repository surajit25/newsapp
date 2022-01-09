import { Container, Typography } from "@mui/material"


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Paper from "@mui/material/Paper";
import Articles from "./articles";
import Category from "./category";


function CategoryWise(){


    const [value, setValue] = React.useState('headlines');

    const handleChange = (event, newValue) => {
      setValue(newValue);

    }


    return(
        <>
        <div className="my-3 " style={{minHeight:'100vh'}} >

            <Container>

            <Box className='d-flex justify-content-center align-items-center col-12'>

            <Box className="col-12 row">


            <Box className="col-lg-3 d-lg-block d-none my-5">    
            <Box className="col-12 d-flex justify-content-center align-items-center">

               <Paper className="p-3">
               <Typography className="fw-bold mb-2">
                    Todays News
                </Typography>

                <Typography className="text-center p-2 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </Typography>

               </Paper>

              
            </Box>

            </Box>


            <Box className="col-lg-9">
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                
                aria-label="scrollable auto tabs example"

                scrollButtons='off'


                textColor="inherit"

                TabIndicatorProps={{
                    style:{
                        backgroundColor:'black'
                    }
                }}

            
            >
                <Tab value='headlines' label="Headlines" />
                <Tab value='entertainment' label="Entertainment " />
                <Tab value='health' label="Health" />
                <Tab value='sports' label="Sports" />
                <Tab value='science' label="Science" />
              
            </Tabs>


            {value=='headlines'?<Articles />:""}

            {value!='headlines'?<Category category={value} loading={true} />:""}

            


            </Box>

            </Box>


            </Box>


            </Container>

        </div>
        </>
    )
}

export default CategoryWise