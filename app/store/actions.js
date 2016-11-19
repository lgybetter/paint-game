import auth from '../api/auth'
import * as types from './mutation-types'

export const user_enter = ({ commit }, userName) => {
  auth.userEnter(userName,() => {
    commit(types.USER_ENTER)
  })
} 

export const user_exit = ({ commit }) => {
  auth.userExit(() => {
    commit(types.USER_EXIT)
  })
} 