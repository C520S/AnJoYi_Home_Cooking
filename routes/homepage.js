const express = require('express');
const handleDB = require('../db/handleDB');
const router  = express.Router();


router.get('/', (req, res) => {
    res.render('homePage.html')
})

router.get('/homePageData',(req,res)=>{
    (async function (){
        let result = await handleDB(res,'select * from recipe where id_category =1;');
        
        res.send(result);
     })();

});




module.exports = router