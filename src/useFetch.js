import { useEffect, useState } from 'react';


const useFetch = (url) => {

    const [data, SetData] = useState(null)
    const [isPending, SetIsPending] = useState(true)
    const [error, SetError] = useState(null)

    useEffect(() => {    
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if (!res.ok){
                    throw Error('Sorry Ada Eror pada server')
                }
                return res.json()
            })
            .then(data => {
                SetData(data)
                SetIsPending(false)
                SetError(null)
            })
            .catch(err => {
                console.log(err.message)
                SetError(err.message)
                SetIsPending(false)
            })
        }, 1500)
    },[url])

    return {data, isPending, error}
}

export default useFetch