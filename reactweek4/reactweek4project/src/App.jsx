import { useState } from 'react'

function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
      <Card>
        hi there
      </Card>
      <Card>
        <div>
          hello from the 2nd card
        </div>
      </Card>
      <Card>
        <button onClick={function(){
          setCount(count + 2);
        }}>Count is {count}</button>
      </Card>
    </div>
  )
}

function Card({children}) {
  return <div style={{
    border: "1px solid black",
    padding: 10,
    margin: 10
  }}>
    {children}
  </div>
}

export default App