import React, { Component } from 'react'
import Toast from 'react-bootstrap/Toast'
import { BiErrorCircle } from 'react-icons/bi'
import { CgCheckO } from 'react-icons/cg'




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
                style={{ position: 'fixed', top: 50, right: "20%", width: '50%', backgroundColor: '#c4f5cd' }}
                >
                    <Toast.Body><CgCheckO/> {this.props.text}</Toast.Body>
            </Toast>
                :
                <Toast 
                onClose={() => this.setState({ visible: false }, this.props.resetAlert)} show={this.state.visible} delay={2000} autohide
                style={{ position: 'fixed', top: 50, right: "20%", width: '50%', backgroundColor: '#966569' }}
                >
                    <Toast.Body> <BiErrorCircle/> {this.props.text}</Toast.Body>
            </Toast>
            }  
            
               </> 
        )
    }
}