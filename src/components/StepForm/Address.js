import { Button, Container, TextField } from "@material-ui/core"
import React from "react"
export const Address = ({formData , setForm, navigation}) => {
    const {address, city, state,zip} = formData;
    return (
        <Container maxWidth="xs"> 
            <h3>Address</h3>
        <TextField 
            label="Address" 
            name="address" 
            value={address}
            onChange = {setForm} 
            margin="normal" 
            variant="outlined" 
            autoComplete = "off" 
            fullWidth/>

        <TextField 
            label="City" 
            name="city" 
            value={city}
            onChange = {setForm} 
            margin="normal" 
            variant="outlined" 
            autoComplete = "off" 
            fullWidth/>

        <TextField 
            label="State" 
            name="state" 
            value={state}
            onChange = {setForm} 
            margin="normal" 
            variant="outlined" 
            autoComplete = "off" 
            fullWidth/>

        <TextField 
            label="Zip" 
            name="zip" 
            value={zip}
            type={Number}
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