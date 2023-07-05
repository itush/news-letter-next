"use client";
import React from 'react';
import Image from 'next/image';
import check from "../public/images/icon-list.svg"
import illusMob from "../public/images/illustration-sign-up-mobile.svg"

export default function SignUp() {
    return (
        <main>
            <Image src={illusMob} alt='illusMob' className='min-w-full'/>
            
            <article className="description p-4">
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
