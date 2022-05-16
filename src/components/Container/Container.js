import React from 'react'
import styles from './Container.css'
import './Container.css'

const Container = (props) => {
  return <div className="container">
      {props.children}
  </div>}

export default Container