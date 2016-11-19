module.exports = function () {
  return (socket) => {
    var addUser = false

    socket.on('disconnect', () => {
      if(addUser) {
        usersNumber--
        socket.broadcast.emit('user exit', {
          userName: socket.userName,
          usersNumber: usersNumber
        })
      }
    })

    socket.on('user enter', (userName) => {
      if (addUser)
        return
      socket.userName = userName
      usersNumber++
      addUser = true
      socket.emit('user enter success', {
        userName: socket.userName,
        usersNumber: usersNumber
      })
      socket.broadcast.emit('new user join', {
        userName: socket.userName,
        usersNumber: usersNumber
      })
    })
  }
}