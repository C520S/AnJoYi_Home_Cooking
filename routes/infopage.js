const express = require('express');
const handleDB = require('../db/handleDB');
const router  = express.Router();
router.get("/recipes_detail/:id",(req, res) => {
    (async function (){
        let {id} = req.params
        let result = await handleDB(res,`select * from recipe where idrecipe =${id};`);
        let data = {recipe:result[0]};
       res.render("infoPage",data);
     })();
});
module.exports = router