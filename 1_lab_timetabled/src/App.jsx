import './App.css';
import Calendar from './components/Calendar'; /*importing the calendar component*/

const App = () => {
  return (
    <div className="App">
      <h1> Michigan Time Table </h1>
      <h2> Follow this time table to get your week properly organized! </h2>
      <Calendar/> 

    </div>
  )
}

export default App 