import React from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/CollectionOverview'
import CategoryPage from '../Category'



const Shop = ({ match }) => {
    console.log(match)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
        </div>
    )
}


export default Shop
