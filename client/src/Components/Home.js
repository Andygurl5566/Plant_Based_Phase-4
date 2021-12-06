import {Link} from 'react-router-dom'


function Home () {
    return (
        <>
        <h1>HOME</h1>
        <p>welcome to plant based , the premiere garden management app</p>

        <button class= "redirect"> <Link to="/login"> Login </Link></button>
        
        </>

    )
}

export default Home