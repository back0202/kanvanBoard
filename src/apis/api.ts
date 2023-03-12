import axios from "axios"
import { CardItem } from "../constants/type"

const getAllData = async () => {
    const data = await axios.get(`http://localhost:4000/canvanboard`)

    return data.data
}
const setData = async () => {
    await axios.post("http://localhost:4000/doing", { name: 4 })
}

const patchDate = async (startCard: CardItem) => {
    await axios.patch(`http://localhost:4000/canvanboard/${startCard.id}`, { order: startCard.order, status: startCard.status })
}

export { setData, getAllData, patchDate }