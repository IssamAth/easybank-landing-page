import React from 'react'
import IMG1 from '../../images/image-currency.jpg'
import IMG2 from '../../images/image-restaurant.jpg'
import IMG3 from '../../images/image-plane.jpg'
import IMG4 from '../../images/image-confetti.jpg'

// ARTICLES DATA 
const data = [
    {
        id: 1,
        image: IMG1,
        author: 'By Claire Robinson',
        title: 'Receive money in any currency with no fees',
        paragraph: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
        id: 2,
        image: IMG2,
        author: 'By Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        paragraph: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
        id: 3,
        image: IMG3,
        author: 'By Wilson Hutton',
        title: 'Take your Easybank card wherever you go',
        paragraph: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        id: 4,
        image: IMG4,
        author: 'By Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        paragraph: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    }

]

const Articles = () => {
    return (
        <div className=' container flex flex-col pt-20 bg-articlebg pb-9'>
            {/* TITLE */}
            <div>
                <h2 className=' text-center text-3xl'>Latest Articles</h2>
            </div>
            {/* ARTICLES */}
            <div className=' flex flex-col mt-8'>
                {
                    data.map(({ id, image, author, title, paragraph }) => {
                        return (
                            <article key={id} className=' flex flex-col bg-white mb-8 rounded-t-md rounded-b-md'>
                                <div className=' rounded-t-md'>
                                    <img src={image} className=' rounded-t-md' alt="" />
                                </div>
                                <div className=' px-7 py-5 pb-10'>
                                    <div>
                                        <small className=' text-smxs text-graynot'>{author}</small>
                                    </div>
                                    <div>
                                        <h4 className=' text-bsm font-medium'>{title}</h4>
                                    </div>
                                    <div className=' pt-2'>
                                        <p className='text-graynot text-bxs'>{paragraph}</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Articles