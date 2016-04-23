import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

export default class ReaderPage extends Component {
  render() {
    const { image, format } = this.props

    const classes = classnames({
      [style.single]: format === 'single',
      [style.double]: format === 'double'
    })

    return (
      <img src={image} className={classes} />
    )
  }
}
