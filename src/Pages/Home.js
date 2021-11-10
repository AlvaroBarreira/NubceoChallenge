
import Navigation from '../Components/Navigation/Navigation'
import Button from '../Components/Button/Button'

function Home() {

    return (
        <>
            <Navigation />
            
            <h1 className="text-danger text-center">Welcome musicDB</h1>

            <Button title={"Get Started"}/>

        </>
    )
}

export default Home
