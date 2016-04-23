import React, { Component } from 'react'
// import style from './style.css'

export default class ReaderTitle extends Component {
  render() {
    return (
      <section>
        <span>
          {this.props.title}
        </span>
      </section>
    )
  }
}
