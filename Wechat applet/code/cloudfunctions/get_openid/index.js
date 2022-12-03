// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env:'cloud1-1g2p285p3573c47d'
})

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    var openId=wxContext.OPENID
    var result={}
    var data={}
    result.errCode=0
    result.errMsg='获取用户openid成功'
    data.openId=openId
    result.data=data
    console.log(result)
    return result

}