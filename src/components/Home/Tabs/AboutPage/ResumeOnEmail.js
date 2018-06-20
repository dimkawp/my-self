import React, { Component } from 'react';
import { Grid, Form, Input, Button, Dimmer, Loader } from 'semantic-ui-react';
//External
import { Animated } from "react-animated-css";


class ResumeOnEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formMail: '',
            responseForm: '',
            disableForm: false,
            formSubmitBtnDisabled: true
        }
    }

    ChangeFormMail = (event) => {
        this.setState({formMail: event.target.value});
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.formMail) === true) {
            console.log('valid - ', event.target.value);
            this.setState({formSubmitBtnDisabled: false});
        }
        else {
            console.log('InValid - ', event.target.value);
            this.setState({formSubmitBtnDisabled: true});
        }
    }

    handleSubmit = () => {
        this.setState({disableForm: true});
        const apiUrl = "https://api-fore-homework-13.herokuapp.com";
        const data = {
            mail: this.state.formMail
        }
        fetch(apiUrl + '/api/users/resume_on_mail', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                setTimeout(() => {
                    this.setState({responseForm: response.message});
                    this.setState({disableForm: false});
                    this.setState({formMail: '', formSubmitBtnDisabled: true});
                }, 1500);
            })
    }
    render() {
        return (
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={500} isVisible={true}>
                <Grid centered>
                    <div className="ResumePreview">
                        <p>My resume y can take on your email. <br/>Just Write your email in input and click submit.</p>
                    </div>
                </Grid>
                <div className="ResumeOnEmail">
                    <Grid centered>
                        <Form className="FormBlock" onSubmit={this.handleSubmit}>
                            {
                                this.state.responseForm > '' &&
                                <div className="responseForm">
                                    {
                                        this.state.responseForm
                                    }
                                </div>
                            }
                            <input disabled={this.state.disableForm} className="FormInput" placeholder='eMail' value={this.state.formMail} onChange={this.ChangeFormMail}/>
                            <Button loading={this.state.disableForm} type='submit' disabled={this.state.formSubmitBtnDisabled}>
                                Submit
                            </Button>
                        </Form>
                    </Grid>
                </div>
            </Animated>
        );
    }
}

export default ResumeOnEmail;
