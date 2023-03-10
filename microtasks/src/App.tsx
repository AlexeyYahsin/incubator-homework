import { MouseEvent, useState } from 'react'
import './App.css'
import { Body } from './components-w1/Body-l1'
import { Button } from './components-w1/Button-l3'
import { Footer } from './components-w1/Footer-l1'
import { Header } from './components-w1/Header-l1'
// import { NewComponent } from './components-w1/NewComponent-l2'
import { NewComponent } from './components-w1/NewComponent-l5'


                                    // week 1 homework 01

// function App() {
//   return (
//     <div className="App">
//       <Header titleForHeader = {'New Footer'} />
//       <Body  titleForBody= {'New Body'}/>
//       <Footer />
//     </div>
//   );
// }

                                  // week 1 homework 02

// const topCars = [
//   {manufacturer:'BMW', model:'m5cs'},
//   {manufacturer:'Mercedes', model:'e63s'},
//   {manufacturer:'Audi', model:'rs6'}
// ]


// function App() {
//   return (
//     <div className="App">
//       <NewComponent cars = {topCars}/>
//     </div>
//   );
// }

// week 1 homework 03


// const App = () => {

//   // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//   //   console.log('Hello im Vasya') 
//   // }
//   // const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//   //   console.log('Hello im Ivan') 
//   // }

//   // const onClickHandler = ( name: string) => {
//   //   console.log(`Hello im ${name}` );
    
//   // }

//   // const foo1 = () => {
//   //   console.log('100200');
    
//   // }
//   // const foo2 = (num: number) => {
//   //   console.log(num);
//   // }

//   const BtnFoo1 = (subscriber: string, age: number) => {
//     console.log(subscriber, age);
//   }
//   const BtnFoo2 = (subscriber: string, age: number) => {
//     console.log(subscriber, age);
//   }

//   return(
//     <div className='App'>
//       {/* <button onClick={() => onClickHandler('Vasya')}>MyYouTubeChanel - 1 </button>
//       <button onClick={() => onClickHandler('Ivan')}>MyYouTubeChanel - 2 </button> */}


//       {/* <button onClick={foo1}>1</button>
//       <button onClick={(event: MouseEvent<HTMLButtonElement>) => {foo2(100200)}}>2</button> */}


//       <Button title='1' callBack = {() => BtnFoo1('Vasya', 21)}/>
//       <Button title='2' callBack = {() => BtnFoo2('Ivan', 25)}/>
//       <Button title='3' callBack = {() => console.log('im stupid button')}/>
//     </div>
//   )
// }





                        // week 1 homework 04

// const App = () => {

// let [count, setCount] = useState(0)
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=> {setCount(count + 1)}}>+++++</button>
//     <button onClick={()=> {setCount(count = 0)}}>0</button>
//     </>
//   )
// }








                    // week 1 homework 05

const App = () => {
  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" },
  ]);

  let [filter, setFilter] = useState<string>('all')
  type FilterType = 'all' | 'dollar' | 'ruble' 

  let currentMoney 

  filter === 'all' ? currentMoney = money : 
                     currentMoney = money.filter(item => item.banknote === filter)
 
  const onClickHandler = (str: string) => {
    
    setFilter(filter = str)
  }
  
  return (
   <NewComponent list = {currentMoney} clickHandler = {onClickHandler}/>
  )
}
export default App;
