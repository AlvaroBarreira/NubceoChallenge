import { Fragment } from 'react';
import Navigation from '../Components/Navigation/Navigation';
import CardSection from '../Components/CardSection/CardSection'


function List() {
    return (
        <Fragment>
        <Navigation />
        <h1 className="text-danger text-center">Your list</h1>
         <CardSection />
    </Fragment>
    )
}

export default List
