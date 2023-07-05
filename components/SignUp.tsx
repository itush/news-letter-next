"use client";
import React from 'react';
import Image from 'next/image';
import check from "../public/images/icon-list.svg";
import illusMob from "../public/images/illustration-sign-up-mobile.svg";
import illusDesk from "../public/images/illustration-sign-up-desktop.svg"

export default function SignUp() {
    return (
        <main className='bg-White md:px-4 md:py-2 md:max-w-[80%] md:max-h[60%] md:flex md:m-auto
                            md:flex-row-reverse md:gap-2 md:rounded-xl'>
            <Image src={illusMob} alt='illusMob' className='min-w-full md:hidden'/>

            <Image src={illusDesk} alt='illusDesk' className=' hidden md:block md:w-[50%]'/>
            
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

                <form className="form my-4">

                    <header className="form-header">
                        <label htmlFor="email" className='font-semibold text-CharcoalGrey'>Email address</label> <small className="error-msg"></small>
                    </header>

                    <input name="email" placeholder=" email@company.com" id="email" 
                    className='p-4 my-4 w-[100%] outline-none border-[1px] border-Grey rounded-md focus-within:border-DarkSlateGrey' />

                    <button type="submit" className="subscribe-btn bg-DarkSlateGrey text-White p-4 w-full rounded-md font-semibold">Subscribe to monthly newsletter</button>

                </form>
            </article>
        </main>
    )
}
