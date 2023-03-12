import React from 'react'
import styled from 'styled-components'
import { CardProps } from '../constants/type'
import useCard from '../hooks/useCard'

const Div = styled.div`
    border: 1px solid red;   
`

function Card({ card, cardList, cardIdx, canvanboard, changeCanvanboard }: CardProps) {
    const { onDragStart, onDragOver, onDrop } = useCard({ card, cardList, cardIdx, canvanboard, changeCanvanboard })

    return (
        <Div draggable onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
            <h2>{card.title}</h2>
            <p >
                {card.content}
            </p>
            <p>{card.deadLine}</p>
            <p>{card.status}</p>
            <p>{card.manager}</p>
        </Div>
    )
}

export default Card
