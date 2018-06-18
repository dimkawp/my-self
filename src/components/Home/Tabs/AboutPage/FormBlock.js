import React, { Component } from 'react';
//External
import { Animated } from "react-animated-css";
import { Grid, Form, Input, TextArea, Button, Loader, Dimmer} from 'semantic-ui-react';

class FormBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            formMail: '',
            formText: '',
            disableForm: false,
            responseForm: '',
            formSubmitBtnDisabled: true
        }
    }

    ChangeFormName = (event) => {
        this.setState({formName: event.target.value});
    }
    ChangeFormMail = (event) => {
        this.setState({formMail: event.target.value});
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.formMail) === true) {
            console.log('valid - ', event.target.value);
            this.setState({formSubmitBtnDisabled: false});
        }
        else {
            console.log('INvalid - ', event.target.value);
            this.setState({formSubmitBtnDisabled: true});
        }
    }
    ChangeFormText = (event) => {
        this.setState({formText: event.target.value});
    }
    handleSubmit = () => {
        this.setState({disableForm: true});
        const apiUrl = "https://api-fore-homework-13.herokuapp.com";
        

        const data = {
            name: this.state.formName,
            mail: this.state.formMail,
            text: this.state.formText
        }
        fetch(apiUrl+'/api/users/message', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            setTimeout(() => {
                this.setState({responseForm: response.message});
                this.setState({disableForm: false});
                this.setState({formName: '',formMail: '', formText: '', formSubmitBtnDisabled: true});
            },1500);
        })
    }

    render() {
        return (
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={2000} isVisible={true}>
                <div className="FormBlock">
                    <Grid centered>
                        <Form onSubmit={this.handleSubmit}>
                        {
                            this.state.disableForm === true &&
                            <Dimmer active>
                                <Loader inverted>Loading</Loader>
                            </Dimmer>
                        }
                        {
                            this.state.responseForm > '' &&
                            <div className="responseForm">
                            {
                                this.state.responseForm
                            }
                            </div>
                        }
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} label='Name' placeholder='Name'  value={this.state.formName} onChange={this.ChangeFormName} />
                                <Form.Field control={Input} label='Mail' placeholder='Mail' value={this.state.formMail} onChange={this.ChangeFormMail}/>
                            </Form.Group>
                            <Form.Field control={TextArea} label='Text' placeholder='Tell us more about you...' value={this.state.formText} onChange={this.ChangeFormText}/>
                            <div className="subBlock">
                                <Button type='submit' disabled={this.state.formSubmitBtnDisabled}>Submit</Button>
                            </div>
                        </Form>
                    </Grid>
                </div>
            </Animated>
        );
    }
}

export default FormBlock;
