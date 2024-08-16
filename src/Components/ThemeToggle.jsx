function ThemeToggle(){
    return(
        <div className='nav'>
        <div className='title'>
            <h2>Social Media Dashboard</h2>
            <p>Total Followers: 23,004</p>
        </div>
        <label htmlFor="toggle" className="switch" id='label'>
            <input type="checkbox" name='toggle' checked /> 
            <span className="slider round"></span> Dark
        </label>
    </div>
    )
    

}
export default ThemeToggle;