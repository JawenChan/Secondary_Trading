// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db=cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  db.collection('products').where({
      BookName:"sad"
  }).get({
    // success:res=>{
    //   console.log(res.data)
    //   return res 
    // },
    // fail(res){
    //   console.log("none")
    //   return err
    // }
  }).then(res=>{
    console.log(res.data)
    return res
  });
}