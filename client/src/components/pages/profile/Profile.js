import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Profile = props => {
    return (
        <Container>
            <h1>¡Bienvenid@ a tu perfil, {props.loggedInUser.username}!</h1>
            <Link to="/coasters">
                <Button size="sm" variant="dark" style={{ marginTop: '20px' }}>Ver productos</Button>
            </Link>
        </Container>
    )
}

export default Profile