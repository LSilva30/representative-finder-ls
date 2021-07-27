import logo from '../assets/embassy.svg'

function Home() {
    return(
        <>
        <div className="logo-img">
            <img src={logo} alt="reps logo" />
        </div>
        <div className="home-container">
            <h1>Welcome to Representative Finder</h1>
            <br />
            <h4><em>"Representative Finder can help you find your local representatives and give you detailed information by county and state."</em></h4>
            <br/>
            <h3>To begin, try <a href="/search"><em>searching</em></a> by address</h3>
        </div>
        </>
    )
}

export default Home