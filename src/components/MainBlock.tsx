import { Stack, Typography } from '@mui/material'
import React from 'react'
import ControlBlock from './ControlBlock'
import ImageLoader from './ImageLoader'
import BottomControl from './BottomControl'
const Main = () => {
    return (
        <Stack spacing={1} sx={{
            backgroundColor: "#303030",
            width: "50%",
            height: "auto",
            padding: "20px",
            borderRadius: "20px",
            color: "#9e9e9e",
            marginTop: "30px",
            marginBottom: "30px"
        }} >
            <Typography variant={'h3'} color="inherit" textAlign={"center"} marginBottom={"20px"}>IMAGE EDITOR</Typography>
            <Stack direction={{ lg: "row", sm: "column" }} spacing={1}>
                <ControlBlock />
                <ImageLoader />
            </Stack>
            <BottomControl />
        </Stack>
    )
}

export default Main
