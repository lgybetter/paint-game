export default {
  userEnter(userName, callback) {
    this.$socket.emit('user enter', userName)
    callback()
  },
  userExit(callback) {
    this.$socket.emit('disconnect')
    callback()
  }
}





