import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, multiply, reset} from '../slices/counterSlice';

 
const Counter = () => {
    const counter = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (<div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}>Counter + 1</button>&nbsp;
        <button onClick={() => dispatch(decrement())}>Counter - 1</button>&nbsp;
        <button onClick={() => dispatch(multiply())}>Counter * 2</button>&nbsp;
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>)
}
export default Counter;