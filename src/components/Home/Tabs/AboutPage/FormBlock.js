import React, { Component } from 'react';
//External
import { Animated } from "react-animated-css";
import { Grid, Form, Input, TextArea, Button } from 'semantic-ui-react';

class FormBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formName: '',
            formMail: '',
            formText: ''
        }
    }

    render() {
        return (
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" animationInDelay={2000} isVisible={true}>
                <div className="FormBlock">
                    <Grid centered>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Field control={Input} label='Name' placeholder='Name'  value={this.state.formName} onChange={this.ChangeFormName} />
                                <Form.Field control={Input} label='Mail' placeholder='Mail' value={this.state.formMail} onChange={this.ChangeFormMail}/>
                            </Form.Group>
                            <Form.Field control={TextArea} label='Text' placeholder='Tell us more about you...' value={this.state.formText} onChange={this.ChangeFormText}/>
                            <div className="subBlock">
                                <Button type='submit'>Submit</Button>
                            </div>
                        </Form>
                    </Grid>
                </div>
            </Animated>
        );
    }
}

export default FormBlock;
