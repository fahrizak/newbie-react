import { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, SetBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => SetBlogs(data))
    })

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Post!" />}
        </div>
    );
}

export default Home;