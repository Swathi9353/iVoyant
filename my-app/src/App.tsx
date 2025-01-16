
import './App.css'
import EmptyDependencyExample from './Components/EmptyDependencyExample'
import TimerComponent from './Components/TimerComponent'
import SpecificDependencyExample from './Components/WithdependencyExample'
import NoDependencyExample from './Components/WithoutdependencyExample'



function App() {

  return (
    <>
      
        <EmptyDependencyExample />
        <SpecificDependencyExample />
      <NoDependencyExample />
      <TimerComponent/>

  
    </>
  )
}

export default App
