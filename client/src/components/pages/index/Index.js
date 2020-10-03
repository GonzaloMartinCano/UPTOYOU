import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Index = () => {
    return (
        <Container>
            <h1>UP TO YOYU</h1>
            <Link to="/coasters">
                <Button size="sm" variant="dark" style={{ marginTop: '20px' }}>Ver montañas rusas</Button>
            </Link>
        </Container>
    )
}

export default Index