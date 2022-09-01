function authAdminMiddleware(req, res, next) {

    if(req.session.userLogged != undefined){
        next();
    } else {
        // res.send('Esta pagina es solo para administradores');
        res.redirect('/users/login');
    }

}

module.exports = authAdminMiddleware;