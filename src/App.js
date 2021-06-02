import './App.css';
import React, { useEffect, useState } from 'react';
import List from './List'

const App = () => {
  const [listOne, setListOne] = useState([])
  const [listTwo, setListTwo] = useState([])
  const [listThree, setListThree] = useState([])
  const [listFour, setListFour] = useState([])
  
  useEffect(() => {
    let list1 = []
    let list2 = []
    let list3 = []
    let list4 = []
    
    const getData = () => {
      fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
        .then(response => response.json())
        .then(data => {
          data.sort((a, b) => a.id - b.id).forEach(item => {
            if (item.listId === 1) {
              list1.push(item)
            } else if (item.listId === 2) {
              list2.push(item)
            } else if (item.listId === 3) {
              list3.push(item)
            } else if (item.listId === 4) {
              list4.push(item)
            }
          }) 
        })
        .then(
          setListOne(list1),
          setListTwo(list2),
          setListThree(list3),
          setListFour(list4)
        )
    }

    getData()
    
  }, [])
  

  return (
    <div className="App">
      <h1>Fetch Rewards</h1>
      <div className='listContainer'>
        <List listArray={listOne} />
        <List listArray={listTwo} />
        <List listArray={listThree} />
        <List listArray={listFour} />
      </div>
    </div>
  );
}

export default App;
