'use client'
import React from "react";
import { useRouter } from "next/navigation";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import './signup-form-styles.css'
import TextInput from "./text-input.js";
import Button from "../Button/button-big.js";

export default function SignUpForm(props){
    const router = useRouter()

const initialValues ={
    firstName:'',
    lastName:'',
    email:'',
    password:''   
}

const handleSubmit=(values)=>{
    console.log(values)
    redirect('/success')
  }
const handleClick=(values)=>{
    handleSubmit(values)
  }

    return (
        <div className={props.className}>
            
            <Formik
            initialValues={initialValues}
            onSubmit={(values,{setSubmitting})=>{
                
                console.log(JSON.stringify(values))
                router.push( '/success')
            }}
            validationSchema={Yup.object({
                firstName: Yup.string().required('First Name cannot be empty'),
                lastName: Yup.string().required('Last Name cannot be empty'),
                email: Yup.string().email('Invalid email address').required('Email cannot be empty'),
                password: Yup.string().min(8, 'Password must be 8 characters or more').required('Password cannot be empty')
            })
            }
            >
            
                <Form>
                    <Field as={TextInput} name='firstName' type='text' placeholder='First Name'></Field>
                    <Field as={TextInput} name='lastName' type='text' placeholder='Last Name'></Field>
                    <Field as={TextInput} name='email' type='email' placeholder='Email Address'></Field>
                    <Field as={TextInput} name='password' type='password' placeholder='Password'></Field>
                  
                    

                    <Button text='CLAIM YOUR FREE TRIAL' color='green' type='submit' ></Button>
                    <p className="term-agreement">By clicking the button, you are agreeing to our <span className="bold-text" id="terms-text">Terms of Service</span></p>
                </Form>


            </Formik>
        </div>
    )
}