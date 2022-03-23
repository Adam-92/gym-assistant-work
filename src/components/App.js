import './app_style.css';
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators }  from '../state/index'
import Register from '../pages/register-page/Register'
import Login from '../pages/login-page/Login'
import Dashboard from '../pages/dashboard-page/Dashboard';

function App() {
/*   const stateAccount = useSelector( (state) => state.account ) 
     const dispatch = useDispatch()
     const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
*/
  return (
     <Dashboard /> 
  );
}

export default App;
