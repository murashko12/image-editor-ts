import { Box } from '@mui/material'
import './App.css'
import Main from './components/MainBlock'

function App() {
    return (
        <Box 
        height={{ lg: "100vh", sm: "auto" }}
        sx={{
            width: "100%",    
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            backgroundColor: "#000957",
        }}>
            <Main />
        </Box>
    )
}

export default App
