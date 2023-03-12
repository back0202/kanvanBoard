import { Cards, CardItem } from "../constants/type"

const filterCanvanboard = (canvanboardDB: CardItem[]) => {
    const canvanboard = [...canvanboardDB].sort((a, b) => a.order - b.order)
    const newCanvanboard: Cards = {
        todo: [],
        doing: [],
        done: []
    }

    canvanboard.forEach((card: CardItem) => {
        // setCards((prev) => { return { ...prev, [card.status]: [...prev[card.status], card] } })
        if (card.status === "todo") newCanvanboard.todo = [...newCanvanboard.todo, card]
        if (card.status === "doing") newCanvanboard.doing = [...newCanvanboard.doing, card]
        if (card.status === "done") newCanvanboard.done = [...newCanvanboard.done, card]
    })



    return newCanvanboard
}

export { filterCanvanboard }