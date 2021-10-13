import React from "react";
import { useForm, useStep } from "react-hooks-helper"
import { Address } from "./StepForm/Address";
import { Contact } from "./StepForm/Contact";
import { Names } from "./StepForm/Names";
import { Review } from "./StepForm/Review";
import { Submit } from "./StepForm/Submit";

const defaultData = {
    firstName: '',
    lastName: '',
    nickName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
};
const steps = [
    {id: 'Name'},
    {id: 'Address'},
    {id: 'Contact'},
    {id: 'Review'},
    {id: 'Submit'},
]

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const {step , navigation} = useStep({
        steps,
        initialStep: 0,
    });
    const props = {formData,setForm,navigation}
    switch(step.id){
        case "Name":
            return <Names {...props}/>
        case "Address":
            return<Address {...props}/>
        case "Contact":
            return<Contact {...props}/>
        case "Review":
            return<Review {...props}/>
        case "Submit":
            return<Submit {...props}/>
    }
    return (
        <div>
            <h1>Multi Step Form</h1>
        </div>
    )
}