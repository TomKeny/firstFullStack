const API_URL = 'http://localhost:4000'

export async function getItem(id) {
    let response = await fetch(`${API_URL}/todos/item/${id}`)
    let data = await response.json()
    return data
}