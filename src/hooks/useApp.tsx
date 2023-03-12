import { useState, useEffect } from 'react'
import { patchDate, getAllData } from '../apis/api'
import { CardItem, Cards } from '../constants/type'
import { filterCanvanboard } from '../utils/filterCanvanboard'

function useApp() {
    const [canvanboard, setCanvanboard] = useState<Cards>({
        todo: [],
        doing: [],
        done: []
    })

    const changeCanvanboard = async (startCard: CardItem) => {
        patchDate(startCard)
        const canvanboardDB = await getAllData()
        const newCanvanboard = filterCanvanboard(canvanboardDB)

        setCanvanboard(newCanvanboard)
    }
    useEffect(() => {
        const setData = async () => {
            const canvanboardDB: CardItem[] = await getAllData()
            const newCanvanboard = filterCanvanboard(canvanboardDB)

            setCanvanboard(newCanvanboard)
        }

        setData()
    }, [])

    return { changeCanvanboard, canvanboard }
}

export default useApp
