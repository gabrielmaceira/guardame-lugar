import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import GETLogin from './DB Connection/GETLogin'

class Login extends Component {

  state = {
    ...this.state,
    mail: "",
    password: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const jsonForm = (this.state);
    GETLogin(jsonForm);

  }

  render() {
    return (
      <Col className='fondito login-box rounded ancho-maximo-1000'>
        <h4>Logueate</h4>
        <Form onSubmit={this.handleSubmit} className="loginForm">
          <Form.Group as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control name="mail" id="mail" type="email" autoComplete="username"
              value={this.state.mail}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" id="password" type="password" maxLength="15" autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <div className='text-center'>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </Col>
    );
  }
}

export default Login;