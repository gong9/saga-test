import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const state = useSelector( (state)=>{return {number:state.number,data:state.data}} )
  const disPatch = useDispatch()

  const add =()=>{
    disPatch({type:'add'})
  }

  const asyncAdd=()=>{
    disPatch({type:'async_add'})
  }

  return ( 
    <div>
      { state.number }
      { state.data }
      <button onClick={ add }>add</button>
      <button onClick={ asyncAdd }>asy add</button>
    </div>
   );
}
 
export default App;