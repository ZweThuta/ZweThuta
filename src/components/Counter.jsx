import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)
    const isShow = useSelector(state => state.isShow)
    const increaseHandler = () =>{
     dispatch({type:"increase"})
    }

    const decreaseHandler = () =>{
     dispatch({type:"decrease"})
        
    }
    const increaseby5Handler = () =>{
        dispatch ({type:"by5", amount: 5})
    }

    const toggleHandler = () =>{
        dispatch ({type:"toggle"})
 
    }

    const resetHandler = () =>{
        dispatch ({type:"reset"})
    }
  return (
    <>
      <section>
        <h3>Redux Counter</h3>
       {isShow && <h1>{counter}</h1>} 
        <hr />
        <div className="btn-ctr">
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseby5Handler}>Increase By 5</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={toggleHandler}>Toggle</button>
        <button onClick={resetHandler}>Reset</button>


        </div>

      </section>
    </>
  );
};

export default Counter;
