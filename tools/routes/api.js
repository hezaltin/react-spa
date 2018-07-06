const express = require('express');
const router = express.Router();
let localStorage;

if (typeof localStorage === "undefined" || localStorage === null) {
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
  }
   
 // localStorage.setItem('myFirstKey', 'myFirstValue');
  console.log(localStorage.getItem('signUp'));

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('hello world');
});

router.get('/post', (req, res) => {
    res.send('hello world=post');
  });
  

router.post('/login', function (req, res, next) {
    //let getSignupItems=JSON.parse(req.body.logs);
    console.log(req.body.logs)
   let reqCredential= ArrayMapValues(req.body.username,req.body.password,req.body.logs);
  
   console.log(reqCredential)
            if (reqCredential.userName && reqCredential.password) {

               res.send({status:200,message:'pass'});
             } else {
                res.send({status:400,message:'fail'});
           }
    
        });

        router.post('/signup', function (req, res, next) {
                       res.send({status:200,message:'pass'});
        });


        var ArrayMapValues= function(userName,pwd,storagItems){
            let userCredential={};
            userCredential.userName=false;
            userCredential.password=false;

                let filterItems= storagItems.filter(function(item){
                    return userName===item.username;
                });
                if(filterItems.length>0){
                    userCredential.userName=true;
                    let filterItemspassword= filterItems.filter((item=>{
                        return pwd===item.password;
                    })); 
                    if(filterItemspassword.length>0){
                        console.log('signIn');
                        userCredential.password=true;
                    }
                    else{
                        userCredential.password=false;
                        console.log('password is wrong');
                    }
                   
                }
                else{
                    userCredential.userName=false;
                    console.log('userName is wrong');
                }

                return userCredential;

        }
    

module.exports = router;