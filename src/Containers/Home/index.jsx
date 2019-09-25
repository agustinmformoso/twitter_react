import React from 'react'
import { Container, Col, Row } from 'react-bootstrap/'
import {Sidebar} from '../../Components'

const Home = () => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={4}>
                
                </Col>
                <Col md={4}>
                
                </Col>
            </Row>
        </Container>
    )
}

export default Home
