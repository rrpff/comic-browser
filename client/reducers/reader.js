import _ from 'lodash'
import { handleActions } from 'redux-actions'
import { groupPages } from '../utilities/pageCalculator'

const initialState = { active: false }

export default handleActions({
  'set comic' (state, action) {
    const groups = groupPages(action.payload.pages, state.spread)

    return {
      ...state,
      active: true,
      currentGroup: groups[0],
      currentGroupIndex: 0,
      pageCount: action.payload.pages.length,
      pageGroups: groups
    }
  },

  'set spread' (state, action) {
    return { ...state, spread: action.payload }
  },

  'previous' (state, action) {
    const nextIndex = state.currentGroupIndex > 0
      ? state.currentGroupIndex - 1
      : state.currentGroupIndex

    return {
      ...state,
      currentGroupIndex: nextIndex,
      currentGroup: state.pageGroups[nextIndex]
    }
  },

  'next' (state, action) {
    const lastIndex = state.pageGroups.length - 1
    const nextIndex = state.currentGroupIndex < lastIndex
      ? state.currentGroupIndex + 1
      : state.currentGroupIndex

    return {
      ...state,
      currentGroupIndex: nextIndex,
      currentGroup: state.pageGroups[nextIndex]
    }
  }
}, initialState)
