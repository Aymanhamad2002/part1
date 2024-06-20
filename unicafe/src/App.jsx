import {useState} from 'react'
const Header = ({text}) => (<><h1>{text}</h1></>)
const Button = ({text,handleClick})=>(<><button onClick= {handleClick}>{text}</button></>)
const StatisticsLine = ({text,number}) =>(<><p>{text} {number}</p></>)
const Statistics = ({data,clicks}) => {
  if(clicks.length ===0){
    return (<p>No feedback given</p>)
  }else{
    return(<div>
      <table>
        <tbody>
      
    <tr><td><StatisticsLine text ='good' number={data.good} /></td></tr>
    <tr><td><StatisticsLine text ='neutral' number={data.neutral}/></td></tr>
    <tr><td><StatisticsLine text ='bad' number={data.bad} /></td></tr>
    <tr><td><StatisticsLine text ='all' number={data.total} /></td></tr>
    <tr><td><StatisticsLine text ='average' number ={data.average} /></td></tr>
    <tr><td><StatisticsLine text= 'positive' number={data.positive +" %"} /></td></tr>
    </tbody>
    </table>

    
    </div>)

  }
  
}


const getPercent = (good,total)=> good *100/total
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)
  const [sum,setSum] = useState(0) 
  const[average,setAverage] = useState(0)
  const[positive,setPositive]= useState(0)
  const[clicks,setClicks] = useState([])

  const data = {
    good : good,
    neutral : neutral,
    bad:bad,
    total:total,
    average:average,
    positive:positive,


  }
 
  const incrementGood = () => {
    let newGood = good+1
    let newTotal = total+1
    let newSum = sum + 1
    setGood(newGood)
    setTotal(newTotal)
    setSum(newSum)
    setAverage(newSum/newTotal)
    let newPercent = getPercent(newGood,newTotal)
    setPositive(newPercent)
    setClicks(clicks.concat('G'))

    

  }
  const incrementNeutral = () => {
    let newTotal = total +1
    setNeutral(neutral + 1)
    setTotal(newTotal)
    setAverage(sum,newTotal)
    let newPercent = getPercent(good,newTotal)
    setPositive(newPercent)
    setClicks(clicks.concat('N'))
    
  }
  const incrementBad = () => {
    let newTotal = total+1
    let newSum = sum - 1
    setBad(bad + 1)
    setTotal(newTotal)
    setSum(newSum)
    setAverage(newSum/newTotal)
    let newPercent = getPercent(good,newTotal)
    setPositive(newPercent)
    setClicks(clicks.concat('B'))
  }
  
  return(<div>
    <Header text='give feedback'/>
    <Button text='good' handleClick={incrementGood} />
    <Button text='neutral' handleClick={incrementNeutral} />
    <Button text='bad' handleClick={incrementBad} />
    <Header text='statistics'/>
    <Statistics  data= {data} clicks={clicks} />
    


    

  </div>)
}
export default App