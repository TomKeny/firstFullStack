import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItem } from "../API/getItem"

function ViewTodo () {
    const [item, setItem] = useState('')
    const {id} = useParams()

    useEffect(() => {
        async function fetchItem () {
            let data = await getItem(id)
            setItem(data)
        }
        fetchItem()
    })
    return (
        <div>
            <h1>view todo</h1>
            <p>{item.text}</p>
        </div>
    )
}

export default ViewTodo