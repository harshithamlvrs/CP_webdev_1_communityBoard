import './App.css'
import Board from './components/board' /*Importing the board component*/

const App = () => {
  return (
    <div className="App"> 
      <h1> 10 Career Options </h1>
      <h3> This web app includes information about 10 different career paths to explore. </h3>
      <h2><Board /> </h2>
    </div>
  )
}
export default App