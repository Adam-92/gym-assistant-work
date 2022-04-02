import "./WelcomeForm.css"

const WelcomeForm = () => {
    return(
    <form>
        <div className="
            input-welcome-form
            flex-justify-center
            flex-direction-column
            ">
            <label>STEPS </label>
            <input type="text" placeholder='How many?'/>
        </div>
        <div className="
            input-welcome-form
            flex-justify-center
            flex-direction-column
            ">
            <label>CALORIES</label>
            <input type="text" placeholder='How many?'/>
        </div>
        <button className="btn-welcome-form flex-justify-center">
            GO
        </button>
    </form>
    )
}

export default WelcomeForm