import { useState, useEffect} from 'react'
import { readItems } from '../API/readItems'
import { Link } from 'react-router-dom'

function Home () {
    const [items,setItems] = useState([])

    useEffect(() => {
        async function fetchItems () {
            let data = await readItems()
            setItems(data)
        }
        fetchItems()
    }, [])
    return (
        <div>
        <h1>home</h1>
            {items.map(function(item,index) {
                return ( 
                    <Link to={`/${item._id}`}>
                        <p key={item._id}>{index}{item.text}</p>
                    </Link>
                )
            })}
        </div>
    )
}

export default Home