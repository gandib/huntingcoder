import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props) => {
    const [count, setCount] = useState(2)
    console.log(props)
    const [blogs, setblogs] = useState(props.allBlogs)
    // useEffect(() => {
    //     fetch('http://localhost:3000/api/blogs')
    //         .then(res => res.json())
    //         .then(data => setblogs(data))
    // }, []);

    const fetchData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
        setCount(count + 2)
        let data = await d.json()
        setblogs(data)
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={props.allCount !== blogs.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    {blogs.map((blog, index) =>
                        <div key={index}>
                            <Link href={`/blogpost/${blog.slug}`}><h3 className={styles.blogItemh3}>{blog.title}</h3></Link>
                            <p className={styles.blogItemp}>{blog.content.substr(0, 140)}...</p>
                            <Link href={`/blogpost/${blog.slug}`}><button className={styles.btn}>Read More</button></Link>
                        </div>
                    )}
                </InfiniteScroll>

                {/* {blogs.map((blog, index) =>
                    <div key={index}>
                        <Link href={`/blogpost/${blog.slug}`}><h3 className={styles.blogItemh3}>{blog.title}</h3></Link>
                        <p className={styles.blogItemp}>{blog.content.substr(0, 140)}...</p>
                        <Link href={`/blogpost/${blog.slug}`}><button className={styles.btn}>Read More</button></Link>
                    </div>
                )} */}

            </main>
        </div >
    )
}

export default Blog

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let allCount = data.length;
    let myFile;
    let allBlogs = [];
    for (let index = 0; index < 2; index++) {
        const item = data[index];
        console.log(item)
        myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myFile))
    }
    return {
        props: { allBlogs, allCount },
    }
}


// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogs')
//     let allBlogs = await data.json()
//     return {
//         props: { allBlogs },
//     }
// }