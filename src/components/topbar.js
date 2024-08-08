import logo from './../static/images/meetme.png'

function Topbar () {
    return (
        <div className='topBar'>
            <div className='meetme-logo'>
                {/* <img src={logo} className='w-72 absolute' alt='meetme'></img> */}
                <h1 className='font-bold'>meetme</h1>
            </div>
            <div className='navigation-list'>
                <div className='navigation-find-people'>
                    <a className='find-people-btn btn'>
                        Find people
                    </a>
                </div>
                <div className='navigation-directions'>
                    <a className='directions-btn btn'>
                        Directions
                    </a>
                </div>
                <div className='navigation-about'>
                    <a className='about-btn btn'>
                        About
                    </a>
                </div>
            </div>
            <div className='authorisation-btns'>
                <div className='login-btn btn'>
                    <a href='...'>
                        Login
                    </a>
                </div>
                /
                <div className='registration-btn btn'>
                        Register
                </div>
            </div>
        </div>
    )
}

export default Topbar;