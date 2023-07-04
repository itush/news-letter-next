"use client";
import React from 'react';
import Image from 'next/image';
import check from "../public/images/icon-list.svg"
import illusMob from "../public/images/illustration-sign-up-mobile.svg"

export default function SignUp() {
    return (
        <main>
            <Image src={illusMob} alt='illusMob' />
            
            <article className="description">
                <h1>Stay updated!</h1>

                <p>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>

                <ul>

                    <li>
                        <Image src={check} alt='check' />
                        <span>Product discovery and building what matters</span>
                    </li>

                    <li>
                        <Image src={check} alt='check' />
                        <span>Measuring to ensure updates are a success</span>
                    </li>

                    <li>
                        <Image src={check} alt='check' />
                        <span> And much more!</span>
                    </li>

                </ul>

                <form className="form">

                    <header className="form-header">
                        <label htmlFor="email">Email address</label> <small className="error-msg"></small>
                    </header>

                    <input name="email" placeholder=" email@company.com" id="email" />

                    <button type="submit" className="subscribe-btn">Subscribe to monthly newsletter</button>

                </form>
            </article>
        </main>
    )
}
