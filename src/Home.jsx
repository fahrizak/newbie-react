import { useEffect, useState } from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs, SetBlogs] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error, SetError] = useState(null)

    useEffect(() => {
        
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error('Sorry Ada Eror pada server')
                }
                return res.json()
            })
            .then(data => {
                SetBlogs(data)
                SetIsPending(false)
                SetError(null)
            })
            .catch(err => {
                console.log(err.message)
                SetError(err.message)
                SetIsPending(false)
            })
        }, 1500)

    },[])

    return (
        <div className="home">
            {error && <h2> {error} </h2> }
            {isPending && <h2>Loading ...</h2>}
            {blogs && <BlogList blogs={blogs} title="All Post!" />}
        </div>
    );
}

export default Home;