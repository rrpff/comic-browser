import React, { Component } from 'react'
// import style from './style.css'

export default class ReaderControls extends Component {
  render() {
    const { previous, next } = this.props;

    return (
      <section>
        <ul>
          <li onClick={previous}>&lsaquo;</li>
          <li onClick={next}>&rsaquo;</li>
        </ul>
      </section>
    )
  }
}
