import React, { Component } from 'react'
import style from './style.css'
import classnames from 'classnames'

export default class ReaderControlOverlay extends Component {
  render() {
    const { previous, next } = this.props;

    return (
      <div style={style}>
        <div className={classnames(style.side, style.left)}
             onClick={previous}>&lsaquo;</div>
        <div className={classnames(style.side, style.right)}
             onClick={next}>&rsaquo;</div>
      </div>
    )
  }
}
