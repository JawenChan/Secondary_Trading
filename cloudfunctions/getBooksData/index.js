// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db=cloud.database;

  let SearchData=await db.collection('products').wehre({
      BookName:event.getname
  }).get();
  SearchData=SearchData.data[1].value
  return SearchData
}