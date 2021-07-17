import {useSelector,useDispatch} from 'react-redux'
const App = () => {
  const number = useSelector((state)=>state.number)
  const disPatch = useDispatch()

  const add =()=>{
    disPatch({type:'add'})
  }
  const asyncAdd=()=>{
    disPatch({type:'INCREMENT_ASYNC'})
  }
  return ( 
    <div>
      {number}
      <button onClick={add}>add</button>
      <button onClick={asyncAdd}>asy add</button>
    </div>
   );
}
 
export default App;