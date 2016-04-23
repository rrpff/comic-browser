import React, { Component } from 'react'
import ReaderControls from '../ReaderControls'
import ReaderPage from '../ReaderPage'
import ReaderTitle from '../ReaderTitle'
import style from './style.css'

export default class Reader extends Component {
  render() {
    const { reader, actions } = this.props

    if (!reader.active) return <article />

    const visiblePages = reader.currentGroup.map(page =>
      <ReaderPage image={page.image} format={page.format} key={page.image} />
    )

    return (
      <article>
        <ReaderTitle title={reader.title} />
        {visiblePages}
        <ReaderControls previous={actions.previous} next={actions.next} />
      </article>
    )
  }
}
