// 日期格式化
Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

// 爬虫
// const spyder = require('./apps/spyder')
// const time = (new Date()).Format("yyyyMMdd hhmmss")
// const filePath = `./public/json/${time}.json`
// spyder.getRankVideos(filePath)

//  启动服务
const express = require('express')
const app = express()
const utils = require('./public/js/utils')
const fs = require('fs')
app.get('/video/all',(req,res) => {
  const jsonPath = './public/json/'
  const newJson = utils.getFile(jsonPath).pop()
  res.end(newJson)
})
app.listen(3000,() => {
  console.log('listening 3000~')
})




