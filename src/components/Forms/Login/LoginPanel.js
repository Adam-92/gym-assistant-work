import './LoginPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faUser, faKey } from '@fortawesome/free-solid-svg-icons'

const LoginPanel = () => {
    return(
      <article className='center-Login'>
        <div className='container-Login'>
          <section className='center-icon-Login'>
                <FontAwesomeIcon icon={faDumbbell} color='white' size='8x'/>
          </section>
          <section className='center-form-Login'>
            <form>
              <div className='position-Login'>
                <FontAwesomeIcon icon={faUser} color='white' className='positon-absolute-Login'/>
                <input type="text" name="login" className='input-Login' placeholder='Username'></input>
              </div>
              <div className='position-Login'>
                <FontAwesomeIcon icon={faKey} color='white'  className='positon-absolute-Login'/>
                <input type="text" name="password" className='input-Login' placeholder='Password'></input>
              </div>
              <div className='checkbox-Login'>
                <label className='remember-Login'><input type="checkbox"></input>Remember Me</label>
              </div>
              <button type="submit" className='submit-Login'>Log In</button>
            </form>
          </section>
          <div className='container-links-Login'>
            <p className='link-Login'> Create new account </p>
            <p className='link-Login'> Forgot your password ?</p>
          </div>
        </div>
      </article>
    )
}

export default LoginPanel;