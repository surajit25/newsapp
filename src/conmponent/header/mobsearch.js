import { Box } from "@mui/system";

import SearchIcon from '@mui/icons-material/Search';

import Api from '../api';

import { useDispatch } from 'react-redux';

import * as React from 'react'

function Mobilesearchbar(){

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


    return(<>
    <Box className=''>
      
                
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


    </Box>

    </>)
}

export default Mobilesearchbar