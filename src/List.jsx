import React from 'react'
import './List.css'


const List = (props) => {
    let { listArray } = props

    return (
        <div className='List'>
            <ul>
                {listArray.map(item => {
                    if (item.name && item.name !== "") {
                        return <li key={item.id} >{item.name}</li>
                    } else {
                        return null
                    }
                })}
            </ul>
        </div>
    )
}

export default List;