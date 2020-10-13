import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast'


export default class Alert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    render() {

        return (
            <>
            {this.props.status === 'ok' ?

            <Toast
                onClose={() => this.setState({ visible: false }, this.props.resetAlert)} show={this.state.visible} delay={2000} autohide
                style={{ position: 'fixed', top: 50, right: "30%", width: '50%', backgroundColor: '#c4f5cd' }}
                >
                    <Toast.Body>{this.props.text}</Toast.Body>
            </Toast>
                :
                <Toast
                onClose={() => this.setState({ visible: false }, this.props.resetAlert)} show={this.state.visible} delay={2000} autohide
                style={{ position: 'fixed', top: 50, right: "30%", width: '50%', backgroundColor: 'danger' }}
                >
                    <Toast.Body>{this.props.text}</Toast.Body>
            </Toast>
            }  
            
               </> 
        )
    }
}