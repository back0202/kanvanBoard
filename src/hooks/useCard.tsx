import React from 'react'
import { CardProps, DataTransferDataType } from '../constants/type'

function useCard({ card, cardList, cardIdx, canvanboard, changeCanvanboard }: CardProps) {
    const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        e.dataTransfer.setData("id", `${card.id}`)
        e.dataTransfer.setData("status", card.status)
    }

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const startId = Number(e.dataTransfer.getData("id"))
        const startStatus = e.dataTransfer.getData("status") as DataTransferDataType;
        const dropId = card.id
        const dropStatus = card.status

        if (startStatus === dropStatus && startId !== dropId) {
            // 해당 상태 리스트 배열에서 id로 시작 order찾아내고, drop order찾아내서, 시작 orderrk drop order보다 작단면 
            // drop order+drop order다음위치 order /2를 해주면 start order이 변경돼서 drop위치로 이동할수 있다.
            const startCard = cardList.filter((card1) => {
                if (card1.id === startId) return true
            })[0]
            const startOrder = startCard.order

            const dropOrder = card.order
            if (startOrder < dropOrder && cardList.length !== cardIdx + 1) {
                const nextOrder = cardList[cardIdx + 1].order
                const newOrder = (dropOrder + nextOrder) / 2

                startCard.order = newOrder


            } else if (startOrder < dropOrder && cardList.length === cardIdx + 1) {
                startCard.order = dropOrder + 1024

            }
            else if (startOrder > dropOrder && cardIdx !== 0) {
                const prevOrder = cardList[cardIdx - 1].order
                const newOrder = (dropOrder + prevOrder) / 2
                startCard.order = newOrder

            } else {
                startCard.order = cardList[0].order / 2

            }

            changeCanvanboard(startCard)
        } else {
            const startCard = canvanboard[startStatus][0]

            if (cardList[0].id === card.id) {
                startCard.order = (card.order / 2)
                startCard.status = dropStatus
            } else if (cardList.length === cardIdx + 1) {
                startCard.order = card.order + 1024
                startCard.status = dropStatus
            } else {
                const prevOrder = cardList[cardIdx - 1].order
                startCard.order = card.order + prevOrder
                startCard.status = dropStatus
            }
            changeCanvanboard(startCard)
        }
    }
    return { onDragStart, onDragOver, onDrop }
}

export default useCard
