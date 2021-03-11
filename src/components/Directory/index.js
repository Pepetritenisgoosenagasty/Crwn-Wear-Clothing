import React, { useState } from 'react'
import MenuItem from './../Menu-Item/'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../selectors/directory'
import './directory.css'

const Directory = ({ sections }) => {
  
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps}) => (<MenuItem key={id} {...otherSectionProps}/>))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps) (Directory)
