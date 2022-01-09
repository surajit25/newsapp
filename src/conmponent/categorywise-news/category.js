import { Paper } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router";

import Api from "../api";

function Category(props){

    const apikey = 'eb8b4615ae3847feabf579af394eab0a'
    const [Articles,setArtilces]= useState([])

    const [loading,setLoading] = useState('')

    // const history = useHistory()

    useEffect(()=>{

        setLoading(props.loading)
        
        Api.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${apikey}`).then(res=>{
        
              setArtilces(res.data.articles)

              setLoading(false)
        })
    },[props])

    const visitpage=(item)=>{

        //  history.push(item.url)
    }

    return(
        <>
        <div className='col-12 d-flex justify-content-center align-items-center'>
        <Paper className="col-12 row p-2">

            {loading?
            <div className="col-12 d-flex justify-content-center align-itmes-center p-4" role="status">

                <span className="fw-bold">Loading...</span>
                
          </div>
            :<>

            {Articles.map(item=>{

                return(
                    <div className="col-lg-6  mb-2">

                    <Card  className='mx-1'>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={item.urlToImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             {item.title}
                            </Typography>
                         
                        </CardContent>
                        <CardActions>
                            
                         
                            <a className="text-primary text-decoration-none" href={item.url}>
                                  Learn More
                            </a>
                        </CardActions>
                        </Card>

                    </div>
                )
            })}

            </>

        }

    
            
          
        </Paper>

        </div>


        </>
    )
}

export default Category