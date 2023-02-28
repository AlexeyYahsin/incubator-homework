import './App.css';
import { Body } from './components-w1/Body-l1';
import { Footer } from './components-w1/Footer-l1';
import { Header } from './components-w1/Header-l1';
import { NewComponent } from './components-w1/NewComponent-l2';


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

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]


function App() {
  return (
    <div className="App">
      <NewComponent cars = {topCars}/>
    </div>
  );
}

export default App;
