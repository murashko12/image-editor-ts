import { Button, Stack, styled } from '@mui/material'
import React from 'react'

import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';

const CropImage = styled(Button)({
    backgroundColor: "#ff9800",
    '&:hover': {
        backgroundColor: "#f57c00",
    }
})

const BottomControl = () => {
    return (
        <Stack direction={"row"} spacing={1} width={"100%"}>
            <Stack  padding={"20px"}  direction={"row"} spacing={1} width={"50%"}>
                <Button sx={{width: "100%"}} variant="contained" color="error">RESET</Button>
                <Button sx={{width: "100%"}} variant="contained" color="success">SAVE IMAGE</Button>
            </Stack>
            <Stack padding={"20px"}direction={"row"} spacing={1} width={"50%"}>
                <Button sx={{width: "10%", color: "#9e9e9e"}}><UndoIcon/></Button>
                <Button sx={{width: "10%", color: "#9e9e9e"}}><RedoIcon/></Button>
                <CropImage sx={{width: "35%"}} variant="contained">Crop Image</CropImage>
                <Button sx={{width: "35%"}} variant="contained">Choose Image</Button>
            </Stack>
        </Stack>
    )
}

export default BottomControl
