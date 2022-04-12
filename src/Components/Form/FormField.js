import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './FormField.css'

const FormField = () => {
    // register => register function er fitore field er name r condition + message gula hobe
    // handleSubmit => handleSubmit form submit er jonno use hobe
    // reset => reset function input field clear er jonno use hobe
    // formState: {errors} => formState ta error object ta rakhar jonno use hobe
    // trigger => trigger function onKeyUp a use korle aita auto input field ta k trigger kore live error show korbe
    const { register, handleSubmit, reset, formState: { errors }, trigger } = useForm();

    //useForm hook er handleSubmit function er parameter----->
    const onSubmitParam = data => {
        console.log(data);
        //Input field empty---->
        reset()
    }
    return (
        <div>
            {/* onSubmit er vitor hook er prebuild funtion pass korte hobe r tar parameter hobe 1 ta function, jeta input fueld er data gula k dhorbe*/}
            <Form onSubmit={handleSubmit(onSubmitParam)} className='w-50 mx-auto my-5 border px-4 pt-4 pb-5 rounded'>
                <h2 className='mb-4 text-center'>Please Register to Continue</h2>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className={`rmv-shadow ${errors?.name && "invalid"}`} type="text" placeholder="Full Name"
                        {...register("name", {
                            required: 'Name is Required',
                            minLength: {
                                value: 4, message: 'Minimum 4 character required'
                            }
                        })}
                        // register function er fitor condition r message gula object akare likhte hoy
                        onKeyUp={() => {
                            trigger('name')
                        }}
                    />
                    <small className='text-danger'>{errors?.name?.message}</small>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className={`rmv-shadow ${errors?.email && "invalid"}`} type="email" placeholder="Enter email"
                        {...register("email", {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid Email"
                            }
                        })}
                        //Regex use korte hole pattern likhe object create korte hobe
                        onKeyUp={() => {
                            trigger('email')
                        }}
                    />
                    <small className='text-danger d-block'>{errors?.email?.message}</small>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className={`rmv-shadow ${errors?.password && "invalid"}`} type="password" placeholder="Password"
                        {...register('password', {
                            required: 'Password is required',
                            pattern: {
                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                message: "Minimum eight characters, at least one letter and one number"
                            }
                        })}
                        onKeyUp={() => {
                            trigger('password')
                        }}
                    />
                    <small className='text-danger d-block'>{errors?.password?.message}</small>
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