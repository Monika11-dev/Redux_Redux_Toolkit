import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';


// useSelector hook provided by react redux

const Counter = () => {
  // dispatch here is a function which dispatch an action
 const dispatch = useDispatch();
 const counter = useSelector(state => state.counter.counter);
 const showCounter = useSelector(state => state.counter.showCounter);

 const incrementHandler = () =>{
    // dispatch({type: 'increment'})
    dispatch(counterActions.increment());
 };
 const decrementHandler = () =>{
    // dispatch({type: 'decrement'})
    dispatch(counterActions.decrement());
 };
 const decreaseHandler = () =>{
  // dispatch({type : 'increase', amount : 10})
  dispatch(counterActions.increase(10));// payload : 10
 };
 // useSelector is used to extract particular data from store
 // returns part of redux state which we want
 // automatically sets the UI subscriber which changes the UI 
 // when data gets changed
 
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick = {incrementHandler}>Increment</button>
        <button onClick = {decreaseHandler}>Decrement by 10</button>
        <button onClick = {decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
