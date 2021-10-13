
import { Button, Container, TextField } from "@material-ui/core"
import React from "react"
export const Contact = ({formData , setForm, navigation}) => {
    const {phone , email} = formData;
    return (
        <Container maxWidth="xs">
            <h3>Contact</h3>
            <TextField 
                label="Phone" 
                name="phone" 
                value={phone}
                type="number"
                onChange = {setForm} 
                margin="normal" 
                variant="outlined" 
               autoComplete = "off" 
                fullWidth/>

            <TextField 
                label="E-Mail" 
                name="email" 
                value={email}
                onChange = {setForm} 
                margin="normal" 
                variant="outlined" 
                autoComplete = "off" 
                fullWidth/>
            <div style={{marginTop: '1rem'}}>
        <Button 
            color="secondary" 
            variant="contained" 
            onClick={() => navigation.previous()}
            style={{marginRight: '1rem'}}>
                Back
        </Button>
        <Button 
            color="primary" 
            onClick={() => navigation.next()}
            variant="contained">
                Next
        </Button>
        </div>
        </Container>
    )
}