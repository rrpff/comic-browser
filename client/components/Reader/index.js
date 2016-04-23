import React, { Component } from 'react'
import ReaderControls from '../ReaderControls'
import ReaderControlOverlay from '../ReaderControlOverlay'
import ReaderPage from '../ReaderPage'
import ReaderTitle from '../ReaderTitle'
import style from './style.css'

export default class Reader extends Component {
  render() {
    const { reader, actions } = this.props

    if (!reader.active) return <article />

    const previous = () => { scroll(0, 0); actions.previous() }
    const next = () => { scroll(0, 0); actions.next() }
    const visiblePages = reader.currentGroup.map(page =>
      <ReaderPage image={page.image} format={page.format} key={page.image} />
    )

    return (
      <article className={style.reader}>
        <ReaderControlOverlay previous={previous} next={next} />
        <ReaderTitle title={reader.title} />
        {visiblePages}
        <ReaderControls previous={previous} next={next} />
      </article>
    )
  }
}
