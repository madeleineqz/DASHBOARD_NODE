const vistaPrincipal = (req, res)=>{
    res.render('home')
}

const vistaTables = (req, res)=>{
    res.render('tables')
}
const vistaNotifications = (req, res)=>{
    res.render('notifications')
}
const vistaUsuarios = (req, res)=>{
    res.render('user')
}

module.exports = {
    vistaPrincipal,
    vistaTables,
    vistaNotifications,
    vistaUsuarios,
}