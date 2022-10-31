import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs';

const Slug = (props) => {
    const [blog, setblog] = useState(props.myBlog);
    // const router = useRouter();

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = (router.query);
    //     const url = `http://localhost:3000/api/getblog?slug=${slug}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setblog(data))
    // }, [router.isReady, router.query]);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog?.title}</h1>
                <hr />
                <div>
                    {blog?.content}
                </div>
            </main>
        </div>
    )
}

export default Slug

export async function getStaticPaths() {
    let allb = await fs.promises.readdir('blogdata');
    allb = allb.map(item => {
        return { params: { slug: item.split('.')[0] } }
    })
    console.log(allb)
    return {
        paths: [{ params: { slug: "how-to-learn-flask" } }],
        fallback: true
    };
}

export async function getStaticProps(context) {
    const { slug } = (context.params);

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) },
    }
}

// export async function getServerSideProps(context) {
//     const { slug } = (context.query);
//     const url = `http://localhost:3000/api/getblog?slug=${slug}`;
//     let data = await fetch(url)
//     let myBlog = await data.json()
//     return {
//         props: { myBlog },
//     }
// }