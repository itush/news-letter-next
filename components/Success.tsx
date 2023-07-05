"use client";
import success from "../public/images/icon-success.svg";
import Image from "next/image";

import React from 'react';

interface SuccessProps {
    email: string;
}


export default function Success({ email }: SuccessProps) {

    const handleDismiss = () => {
        window.location.href = "/";

    }

    return (
        <section className="success-message p-2 mt-[45%] md:mt-0">

            <Image src={success} alt="success" />

            <h1 className="text-2xl font-bold my-4 text-DarkSlateGrey">Thanks for subscribing!</h1>

            <p className="success-text my-4 text-CharcoalGrey">
                A confirmation email has been sent to <span className="user-email font-bold text-DarkSlateGrey mx-1">{email}</span>
                Please open it and click the button inside to confirm your subscription.
            </p>

            <button className="dismiss-btn  bg-DarkSlateGrey text-White p-4 w-full rounded-md font-semibold" onClick={handleDismiss}>Dismiss message</button>

        </section>

    )
}


