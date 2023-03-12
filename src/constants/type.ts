interface CardItem {
    title: string,
    content: string,
    id: number,
    deadLine: string,
    status: "todo" | "doing" | "done",
    manager: string,
    order: number
}
interface Cards {
    todo: CardItem[],
    doing: CardItem[],
    done: CardItem[]
}


interface CardListProps {
    statusList: CardItem[],
    title: "todo" | "doing" | "done",
    canvanboard: Cards,
    changeCanvanboard: (startCard: CardItem) => void
}

interface CardItem {
    title: string,
    content: string,
    id: number,
    deadLine: string,
    status: "todo" | "doing" | "done",
    manager: string,
    order: number
}
interface CardProps {
    card: CardItem,
    cardList: CardItem[],
    cardIdx: number,
    canvanboard: Cards
    changeCanvanboard: (startCard: CardItem) => void
}


type DataTransferDataType = "todo" | "doing" | "done"

export type { CardItem, Cards, CardListProps, CardProps, DataTransferDataType }