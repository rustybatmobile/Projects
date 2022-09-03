import {connect} from 'react-redux';
import { incrementAction } from './actions/incrementAction';
import { resetAction } from './actions/resetAction';

const App = ({count, incrementAction, resetAction}) => {
  
  function handleClick() {
    incrementAction && incrementAction();
  }
  
  function handleReset() {
    resetAction && resetAction();
  }

  return (
    <div className="stepContainer">
      <span>You have walked ${count} steps today!</span>
      <button className='btn btn1' onClick={handleClick}>Increment count</button>
      <button className='btn btn2' onClick={handleReset}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const count = state.count;
  return {
    count
  }
}


export default connect(mapStateToProps, {incrementAction, resetAction})(App);
