import React from 'react'
import './whyChoose.css'
import ONLINEBANK from '../../images/icon-online.svg'
import SIMPLBUDGE from '../../images/icon-budgeting.svg'
import ONBOARDING from '../../images/icon-onboarding.svg'
import OPENAPI from '../../images/icon-api.svg'

const WhyChoose = () => {
    return (
        <section className=' container bg-whychoose pt-20 pb-6'>
            {/* FIRST HALF */}
            <div className="flex flex-col">
                {/* TITLE */}
                <div>
                    <h2 className=' text-center text-3xl px-10'>Why choose Easybank?</h2>
                </div>
                {/* PARAGRAPH */}
                <div className=' mt-4'>
                    <p className=' text-center text-sm text-graynot'>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>
            </div>
            {/* SECOND HALF (ARTICLES) */}
            <div className=' flex flex-col mt-12 items-center'>
                {/* FIRST ARTICLE */}
                <article className='flex flex-col items-center mb-10'>
                    {/* ICON */}
                    <div className=''>
                        <img src={ONLINEBANK} className='' alt="" />
                    </div>
                    <div className=' mt-5'>
                        <h3 className=' text-bigbase'>Online Banking</h3>
                    </div>
                    <div className=' mt-5'>
                        <p className=' text-center text-sm text-graynot'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                </article>
                {/* SECOND ARTICLE */}
                <article className='flex flex-col items-center mb-10'>
                    {/* ICON */}
                    <div className=''>
                        <img src={SIMPLBUDGE} className='' alt="" />
                    </div>
                    <div className=' mt-5'>
                        <h3 className=' text-bigbase'>Simple Budgeting</h3>
                    </div>
                    <div className=' mt-5'>
                        <p className=' text-center text-sm text-graynot'>See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.</p>
                    </div>
                </article>
                {/* THIRD ARTICLE */}
                <article className='flex flex-col items-center mb-10'>
                    {/* ICON */}
                    <div className=''>
                        <img src={ONBOARDING} className='' alt="" />
                    </div>
                    <div className=' mt-5'>
                        <h3 className=' text-bigbase'>Fast Onboarding</h3>
                    </div>
                    <div className=' mt-5'>
                        <p className=' text-center text-sm text-graynot'>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                </article>
                {/* FOURTH ARTICLE */}
                <article className='flex flex-col items-center mb-10'>
                    {/* ICON */}
                    <div className=''>
                        <img src={OPENAPI} className='' alt="" />
                    </div>
                    <div className=' mt-5'>
                        <h3 className=' text-bigbase'>Open API</h3>
                    </div>
                    <div className=' mt-5'>
                        <p className=' text-center text-sm text-graynot'>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default WhyChoose