import './login.style.css'
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
export const Login = ()=>{
    return (
        <div className="login-page">
            <div className="login-box">
                <Container>
                    <Row>
                        <Col>
                        <h1 className="heading text-center">CLIENT LOGIN</h1>
                        <hr />
                        <Form>
                            <Form.Group className="EMAIL">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email..." />
                                
                            </Form.Group>
                            <Form.Group className="PASSWORD">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password..." />
                                
                            </Form.Group>
                            <br></br>
                            <Button type="submit">LOGIN</Button>
                        </Form>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                        <a href="#!">Forgot Password?</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}