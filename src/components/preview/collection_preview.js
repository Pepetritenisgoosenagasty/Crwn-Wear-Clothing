import React from 'react'
import CollectionItem from '../Collection-item/index'

import './collection_preview'

const collection_preview = ({ title,items}) =>{
    return (
       
            <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
              <div className="preview" style={{ display: 'flex', justifyContent: 'space-between' }}>
              {items.filter((item, idx) => idx < 4).map((item) => (
                     <CollectionItem key={item.id} item={item} />
                  ))}
            </div>
        </div>
        
    )
}

export default collection_preview
