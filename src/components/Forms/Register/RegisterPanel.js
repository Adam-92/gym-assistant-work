import '../Login/LoginPanel.css'
import './RegisterPanel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faUser, faEnvelope,faKey } from '@fortawesome/free-solid-svg-icons'

const RegisterPanel = () => {
    return(
      <article className='center-Login'>
        <div className='container-Login'>
          <section className='center-icon-Register'>
                <FontAwesomeIcon icon={faDumbbell} color='white' size='8x'/>
          </section>
          <section className='center-form-Login'>
            <form>
              <div className='position-Login'>
                <FontAwesomeIcon icon={faUser} color='white' className='positon-absolute-Login'/>
                <input type="text" name="login" className='input-Login' placeholder='Username'></input>
              </div>
              <div className='position-Login'>
                <FontAwesomeIcon icon={faEnvelope} color='white' className='positon-absolute-Login'/>
                <input type="text" name="mail" className='input-Login' placeholder='Email Adress'></input>
              </div>
              <div className='position-Login'>
                <FontAwesomeIcon icon={faKey} color='white' className='positon-absolute-Login'/>
                <input type="text" name="password" className='input-Login' placeholder='Password'></input>
              </div>
              <div className='position-Login'>
                <FontAwesomeIcon icon={faKey} color='white' className='positon-absolute-Login'/>
                <input type="text" name="confirm_password" className='input-Login' placeholder='Re - Password'></input>
              </div>
              <button type="submit" className='submit-Register'>Register</button>
            </form>
          </section>
          <div className='container-links-Login'>
            <p className='link-Login'> Sign in to your account! </p>
          </div>
        </div>
      </article>
    )
}

export default RegisterPanel;