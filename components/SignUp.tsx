"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import check from "../public/images/icon-list.svg";
import illusMob from "../public/images/illustration-sign-up-mobile.svg";
import illusDesk from "../public/images/illustration-sign-up-desktop.svg";
import Success from './Success';
import { motion } from 'framer-motion';

export default function SignUp() {

    /*Specifying the type of the email state variable as string.*/
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isEmailValid, setisEmailValid] = useState<boolean>(false);

    /*Regex pattern for validating email*/
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    /*Handle changes in the email input field and update the state variable*/
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        /*Access the event object and retrieve the new value from the target property of the event */
        const newEmail = event.target.value.trim();
        setEmail(newEmail);
    };

    /*Handle form submission*/
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (email === '') {
            setError('Please enter your email');
            return;
        }

        else if (!emailPattern.test(email)) {
            setError('Invalid email');
            return;
        }

        else {
            setError('');
            setisEmailValid(true);

        }
    }


    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} className='bg-White md:px-4 md:py-2 md:max-w-[80%] md:max-h[60%] md:flex md:m-auto md:flex-row-reverse md:gap-2 md:rounded-xl'>

            {!isEmailValid ? (

                <>
                    <Image src={illusMob} alt='illusMob' className='min-w-full md:hidden' />

                    <Image src={illusDesk} alt='illusDesk' className=' hidden md:block md:w-[50%]' />

                    <article className="description p-2 md:w-[50%] md:flex md:flex-col md:justify-center">


                        <h1 className='text-2xl font-bold my-4 text-DarkSlateGrey'>Stay updated!</h1>

                        <p className='my-4 text-CharcoalGrey'>
                            Join 60,000+ product managers receiving monthly updates on:
                        </p>

                        <ul>

                            <li className='flex items-start gap-2'>
                                <Image src={check} alt='check' />
                                <span>Product discovery and building what matters</span>
                            </li>

                            <li className='flex items-start gap-2 my-4'>
                                <Image src={check} alt='check' />
                                <span>Measuring to ensure updates are a success</span>
                            </li>

                            <li className='flex items-start gap-2'>
                                <Image src={check} alt='check' />
                                <span> And much more!</span>
                            </li>

                        </ul>

                        <form className="form my-4" onSubmit={handleSubmit}>

                            <header className="form-header flex justify-between items-center">
                                <label htmlFor="email" className='font-semibold text-CharcoalGrey'>Email address</label>
                                <small className="error-msg text-Tomato">{error}</small>
                            </header>

                            <input name="email" placeholder=" email@company.com" id="email"
                                className={'p-4 my-4 w-[100%] outline-none border-[1px] border-Grey rounded-md focus-within:border-DarkSlateGrey '}

                                onChange={handleEmailChange}
                            />

                            <motion.button whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }} type="submit" className="subscribe-btn bg-DarkSlateGrey text-White p-4 w-full rounded-md font-semibold">Subscribe to monthly newsletter</motion.button>

                        </form>
                    </article>
                </>


            ) : (
                <Success email={email} />
            )}
        </motion.main>
    )
}