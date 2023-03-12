import styled from 'styled-components';
import Card from './Card';
import { CardListProps } from '../constants/type';

const Div = styled.div`
    flex-grow: 1;
    flex-shrink:1;
`

function CardList({ statusList, title, canvanboard, changeCanvanboard }: CardListProps) {
    return (
        <Div>
            <h1>{title}</h1>
            {statusList && statusList.map((statusListItem, statusListItemIdx) => {
                return <Card
                    key={statusListItem.id}
                    card={statusListItem}
                    cardList={statusList}
                    cardIdx={statusListItemIdx}
                    canvanboard={canvanboard}
                    changeCanvanboard={changeCanvanboard}
                />
            })}

        </Div>
    );
}

export default CardList
