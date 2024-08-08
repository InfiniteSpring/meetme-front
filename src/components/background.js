// import background from './../static/images/bg_3.jpg'
import background from './../static/images/large-bg.jpg'

function Background () {
    return (
        <div className="bg">
            <img className="backgroundImage" src={background}></img>
        </div>
    )
}

export default Background;