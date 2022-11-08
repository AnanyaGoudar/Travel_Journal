import React from 'react';
import Card from './components/Card';
import Navbar from "./components/Navbar"
import data from "./data.js"

function App() {
  const cards = data.map((dataItem) => {
    return(
        <Card
          key = {dataItem.id}
          dataItem = {dataItem}
        />
    )
  })
  return(
    <div>
      <Navbar/>
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  )
}

export default App;
