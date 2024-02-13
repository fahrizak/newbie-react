import { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, SetBlogs] = useState(null)
    const [isPending, SetIsPending] = useState(true)

    useEffect(() => {
        
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                SetBlogs(data)
                SetIsPending(false)
            })
        }, 1500)

    },[])

    return (
        <div className="home">
            {isPending && <h2>Loading ...</h2>}
            {blogs && <BlogList blogs={blogs} title="All Post!" />}
        </div>
    );
}

export default Home;