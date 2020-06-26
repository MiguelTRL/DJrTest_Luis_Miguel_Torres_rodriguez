const {Router} = require('express');
const router = Router()
const admin =  require('firebase-admin')

var serviceAccount = require("../../djrtestluismigueodriguez-firebase-adminsdk-r6fyx-596e076e15.json");


admin.initializeApp({
credential : admin.credential.cert(serviceAccount),
databaseURL : 'https://djrtestluismigueodriguez.firebaseio.com/'

});

const db = admin.database()

router.get('/' ,(req,res) => {

db.ref('works').once('value',(snapshot)=> {
    const data =snapshot.val();
    res.render('index.hbs',{works : data });

});

router.get('/delete-work/:id',(req,res)=>  {

    db.ref('works/'+ req.params.id).remove();
    res.redirect('/')
})



router.get('/complete-work/:id',(req,res)=>  {

    db.ref('works/'+ req.params.id).update({

        status : "completada"
    });
    res.redirect('/')
})



    router.post('/newwork',(req,res)=> {
    console.log(req.body)

        const newWork = {

            nameWork : req.body.name,
            nameDescription : req.body.description,
            status: "incompleta"

        }
            
    db.ref('works').push(newWork);
    res.redirect('/')

    })

}) 

module.exports = router;