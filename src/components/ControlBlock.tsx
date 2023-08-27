import { Box, Button, Grid, Slider, Typography, styled } from '@mui/material'

import {GrRotateLeft, GrRotateRight} from 'react-icons/gr'
import {CgMergeVertical, CgMergeHorizontal} from 'react-icons/cg'

import React from 'react'

const ButtonControl = styled(Button)({
    
    width: '100%',
    border: "2px solid",
    color: "#9e9e9e",
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color: "#ffffff"
    }
})

const ButtonImageForm = styled(Button)({
    fontSize: "21px",
    border: "2px solid",
    color: "#9e9e9e",
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color: "#ffffff"
    }
})

const ControlBlock = () => {

    return (
        <Box sx={{
            height: "360px",
            width: "50%",
            // border: "2px solid #9e9e9e",
            borderRadius: "20px",
            padding: "20px"
        }}>
            <Typography color="inherit" marginBottom={"20px"}>FILTERS</Typography>
            <Grid container rowSpacing={1} columnSpacing={ 1 }>
                <Grid item xs={6}>
                    <ButtonControl variant="outlined" size="large">Brightness</ButtonControl>
                </Grid>
                <Grid item xs={6}>
                    <ButtonControl variant="outlined" size="large">Grayscale</ButtonControl>
                </Grid>
                <Grid item xs={6}>
                    <ButtonControl variant="outlined" size="large">Sepia</ButtonControl>
                </Grid>
                <Grid item xs={6}>
                    <ButtonControl variant="outlined" size="large">Saturate</ButtonControl>
                </Grid>
                <Grid item xs={6}>
                    <ButtonControl variant="outlined" size="large">Contrast</ButtonControl>
                </Grid>
                <Grid item xs={6}>
                    <ButtonControl variant="outlined" size="large">Rotate</ButtonControl>
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
                <Typography color="inherit">ROTATE</Typography>
                <Typography color="inherit">ROTATE</Typography>
            </Box>
            <Slider defaultValue={50} aria-label="Default" />
            <Grid container sx={{display: "flex", justifyContent: "space-between"}}>
                <Grid item>
                    <ButtonImageForm variant="outlined" size="large"><GrRotateLeft/></ButtonImageForm>
                </Grid>
                <Grid item>
                    <ButtonImageForm variant="outlined" size="large"><GrRotateRight/></ButtonImageForm>
                </Grid>
                <Grid item>
                    <ButtonImageForm variant="outlined" size="large"><CgMergeVertical/></ButtonImageForm>
                </Grid>
                <Grid item>
                    <ButtonImageForm variant="outlined" size="large"><CgMergeHorizontal/></ButtonImageForm>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ControlBlock
