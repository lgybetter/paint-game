import socketIo from 'socket.io'

class socketServer {
  constructor(http) {
    this.usersNumber = 0
    this.usersOnline = []
    this.io = socketIo(http)
  }
  ioListen() {
    this.io.on('connection', (socket) => {
      var addUser = false
      socket.on('start_game', () => {
        socket.emit('set_drawer')
        socket.broadcast.emit('set_shower')
      })
      socket.on('clear_canvas', () => {
        socket.broadcast.emit('shower_clear_canvas')
      })
      socket.on('disconnect', () => {
        if (addUser) {
          this.usersNumber--
          socket.broadcast.emit('user exit', {
            userName: socket.userName,
            usersNumber: this.usersNumber
          })
        }
      })

      socket.on('drawer_mouse_down', (pos) => {
        socket.broadcast.emit('show_mouse_down', pos)
      })

      socket.on('drawer_mouse_move', (pos) => {
        socket.broadcast.emit('show_mouse_move', pos)
      })

      socket.on('user_enter', (userName) => {
        if (addUser)
          return
        socket.userName = userName
        this.usersNumber++
        addUser = true
        socket.emit('user_enter_success', {
          userName: socket.userName,
          usersNumber: this.usersNumber
        })
        socket.broadcast.emit('new_user_join', {
          userName: socket.userName,
          usersNumber: this.usersNumber
        })
      })
      
      socket.on('sit_room', (user) => {
        socket.id = user.id
        this.usersOnline[user.id] = socket
        socket.broadcast.emit('new_user_sit', {
          userName: socket.userName,
          userId: socket.id
        })
      })
      
      socket.on('user_sit', ({ index, user, seatLastId }) => {
        socket.id = index
        this.usersOnline[index] = socket
        this.usersOnline[seatLastId] = null
        socket.broadcast.emit('new_user_sit', { index, user, seatLastId })
      })
    })
  }
}

export default socketServer