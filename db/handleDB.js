const db =require('./db')
async function handleDB(res,sqlMethodName){
    let result
try {
   result=  await new Promise((resolve, reject) => {
       
   db.query(sqlMethodName,(err,data) => {
         if(err){
             reject(err);
         }
         resolve(data);
       });
    })
}catch(err){
  console.log(err);
  return 
}
 return result;
}
module.exports =handleDB