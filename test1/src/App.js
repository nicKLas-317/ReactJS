import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Enfant from './Composants/Enfant'
import Todolist from './Composants/Todolist'
// Composant function
const App = ()=>
{
  return (
    <div className="App">
      {/* <Enfant /> */}
      <Todolist />
    </div>
  )
}






export default App