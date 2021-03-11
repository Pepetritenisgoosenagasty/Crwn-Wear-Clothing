import React from 'react'
import Collection from '../../components/preview/collection_preview'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../selectors/shop'

import './collection_overview.css'

const CollectionOverview = ({collections}) => {
    return (
        <div>
            <div className="collections-overview">
            {
                collections.map(({ id,...otherOCollectionProps}) => (
                    <Collection key={id} {...otherOCollectionProps}/>
                ))
            }
           </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview 
 })
 

export default connect(mapStateToProps) (CollectionOverview)
