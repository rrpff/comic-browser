import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Reader from '../../components/Reader'
import * as ReaderActions from '../../actions/reader'
import style from './style.css'

class App extends Component {
  render() {
    const { reader, actions, children } = this.props

    return (
      <div className={style.normal}>
        <Reader reader={reader} actions={actions} />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reader: state.reader
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ReaderActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
