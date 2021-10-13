import { Accordion, AccordionSummary, Container,AccordionDetails, ListItem, Button } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
// import { Edit } from "@mui/icons-material";
//import { ExpandMore } from "@mui/icons-material";


import React from "react"
export const Review = ({formData , navigation}) => {
    const {go} = navigation;
    const {
        firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
    } = formData;
    return (
       <Container maxWidth="sm">
           <h3>Review</h3>
           <RenderAccordian summmary="Name" go={go} details={[
               {'First Name': firstName },
               {'Last Name': lastName },
               {'Nick Name': nickName }
           ]}/>
            <RenderAccordian summmary="Address" go={go} details={[
               {'Address': address },
               {'City': city },
               {'State': state },
               {'Zip': zip }
           ]}/>
            <RenderAccordian summmary="Contact" go={go} details={[
               {'Phone': phone },
               {'E-Mail': email }
           ]}/>
           <Button
           color="primary"
           variant="contained"
           style={{marginTop: "1.5rem"}}
           onClick={() => go('Submit')}
           >
               Submit
           </Button>

       </Container>
    );
};
export const RenderAccordian = ({summmary,details,go}) => (
    <Accordion>
        <AccordionSummary>
            
            {summmary}</AccordionSummary>
        <AccordionDetails>
            <div>
            {
                details.map((data, index) => {
                    const objKey = Object.keys(data)[0];
                    const objValue= data[Object.keys(data)[0]];
                    
                    return <ListItem key={index}>{`${objKey}: ${objValue}`}</ListItem>
                })
            }
           <IconButton 
           color="primary" 
           component="span"
           onClick={() => go(`${summmary}`)}
           >
             <p maxWidth="xs">EDIT</p>  
           </IconButton>
            </div>
        </AccordionDetails>
    </Accordion>
)