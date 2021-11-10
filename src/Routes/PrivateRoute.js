import { Route, Redirect } from 'react-router'


function PrivateRoute(props) {

    const logged = localStorage.getItem("token")

    if (logged === null) return <Redirect to="/"/>

    return (

        <Route  {...props}/>

    )
}

export default PrivateRoute
