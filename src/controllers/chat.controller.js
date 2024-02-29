export const chatBlock = (req,res)=>{
    if(req.session.user.rol === 'user'){
    res.render('chat',{})
    }
    else{
        res.render('denied')
    }
}