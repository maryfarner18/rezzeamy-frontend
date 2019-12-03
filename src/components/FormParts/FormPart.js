import React from 'react'
import { Button, Form, Icon} from 'semantic-ui-react'

const FormPart = (props) =>{
    // PROPS
    // formType = "user"
    // info = object with keys and value = value;
    // labels = object with keys and value = Label;
    // prevStep
    // nextStep 
    // addMore 


    const renderFields = () =>{
        let keys = Object.keys(props.info)
        return keys.map( thisKey => {
            return <Form.Field key={thisKey}>
                <label>{props.labels[thisKey]}</label>
                <input onChange={handleChange} type="text" value={props.info[thisKey]} name={thisKey}/>
            </Form.Field>
        })
    }
    
    const handleChange = (e) => {
        props.handleChange(props.formType, e.target.name, e.target.value) 
    }

    const saveAndContinue = (e) => {
        e.preventDefault()
        props.nextStep()
    }

    const saveAndSubmit = (e) => {
        console.log("HERE SUBMITTING")
        e.preventDefault()
        props.submitForm()
       // this.props.nextStep()
    
    }
    
    const goBack = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    const addMore = (e) => {
        props.addMore(props.formType)
    }

    
    const handleFileChange = (e) => {
        let stateAccessor = e.target.name
        let file = e.target.files[0]
        props.handleFileChange(stateAccessor, file)
    }
    
    return (
        <Form onSubmit={props.submitForm? saveAndSubmit : saveAndContinue }>
            {renderFields()}
            {props.addMore ?
                <React.Fragment>
                    <Icon size='large' onClick={addMore} name="plus"/>
                    <br></br><br></br>
                </React.Fragment>
            :
                null
            }
            {props.prevStep ?
                <Button onClick={goBack}>Back</Button>
            :
                null
            }
            {props.formType === "websites"? 
                <Button type='submit'>Save & Submit!</Button>
            :
                <Button type='submit'>Save & Continue</Button>
            }
        </Form>
    )
}

export default FormPart