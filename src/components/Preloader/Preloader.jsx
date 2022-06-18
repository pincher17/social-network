import React from "react";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import s from './Preloader.module.css';


export default function Preloader() {
 

 return(
    <div className={s.preloader_wrapper}>
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress color='primary' />
                </Box>
              </div>
 )
}


