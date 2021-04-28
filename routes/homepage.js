const express = require('express');
const handleDB = require('../db/handleDB');
const router  = express.Router();


router.get('/', (req, res) => {
    res.render('homePage.html')
})

router.get('/get_data',(req,res)=>{
    (async function getData (){
        let result = await handleDB(res,'select * from info_category');
        
        res.send(result);
     })();

})



module.exports = router