import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Index = () => {
    return (
        <Container>
            <h3>UP TO YOU</h3>
            <Link to="/products">
                <Button size="sm" variant="dark" style={{ marginTop: '20px' }}>Ver productos</Button>
            </Link>
        </Container>
    )
}

export default Index