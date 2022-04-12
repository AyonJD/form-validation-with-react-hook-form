import React from 'react';
import { Button, Form } from 'react-bootstrap';

const FormField = () => {
    return (
        <div>
            <Form className='w-50 mx-auto my-5 border px-4 pt-4 pb-5 rounded'>
                <h2 className='mb-4 text-center'>Please Register to Continue</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>

                <Button className='w-25' variant="dark" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default FormField;