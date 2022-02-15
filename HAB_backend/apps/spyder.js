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

const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const utils = require('../public/js/utils')

const getHotVideo = () => {
  //每次拿到的东西都不一样，很迷，待研究
  let hotUrl = 'https://www.bilibili.com/v/popular/all'
  request(hotUrl, function (error, response, body) {
    console.log(body)
    const hotData = JSON.parse(utils.getAmongStr(body, 'window.__INITIAL_STATE__=', ';(function()'))
    console.log(hotData)
  });
}

const getVideoContent = url => {
  return new Promise((res, rej) => {
    request({ url, gzip: true }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(body)
        let tags = []
        $('.tag').each((idx, tag) => {
          const $tag = cheerio.load(tag)
          tags.push($tag.text().trim())
        })
        const title = $('.video-title').text().trim()
        const view = $('.view').attr('title').replace('总播放数', '') - 0
        const dm = $('.dm').attr('title').replace('历史累计弹幕数', '') - 0
        const like = $('.like').attr('title').replace('点赞数', '') - 0
        res({ title, tags, view, dm, like })
      } else {
        res({})
      }
    })
  })

}

const getRankVideos = (filePath) => {
  const rankUrl = 'https://www.bilibili.com/v/popular/rank/all'
  console.log('开始爬虫····')
  let rankVideos = []
  request(rankUrl, (error, response, body) => {
    const $ = cheerio.load(body)
    $('.rank-item').each((idx, ele) => {
      const $ele = cheerio.load(ele)
      const title = $ele('.title').text().trim()
      const url = 'https:' + $ele('.title').attr('href').trim()
      const upName = $ele('.up-name').text().trim()
      const upUrl = 'https:' + $ele('.detail').find('a').attr('href').trim()
      const rank = $ele('.rank-item').attr('data-rank')
      const time = (new Date()).Format("yyyyMMdd hhmmss")
      let video = {}
      getVideoContent(url).then(data => {
        video = Object.assign(data, { title, url, 'up': { upName, upUrl }, rank })
        rankVideos.push(video)
        if (rankVideos.length == 100) {
          const timeVideosData = JSON.stringify({ time, 'videos': rankVideos })
          console.log(filePath)
          utils.writeFile(filePath, timeVideosData)
        }
      })
    })
  });
}

const getVideoInfo = () => {
  // const rankUrl = 'https://www.bilibili.com/v/popular/rank/all'
  const infoUrl = 'https://www.acfun.cn/rank/list/?cid=-1&pcid=-1&range=DAY'
  console.log('开始爬虫····')
  request(infoUrl, (error, response, body) => {
    const $ = cheerio.load(body)
    console.log($('.video-card__info'))
    $('.video-card__info').each((idx, ele) => {
      const $ele = cheerio.load(ele)
      const title = $ele('.title').text().trim()
      const desc = $ele('.description').text().trim()
      const zan = $ele('.pts').text()
      const dm = $ele('.shallow-gray').text()
      const img = $ele('.video-card__img').find('img').attr('src').trim()
      const videoInfo = { title, desc, zan, dm, img }
      console.log(videoInfo)
    })
  });
}

exports.getRankVideos = getRankVideos
exports.getVideoInfo = getVideoInfo

// getVideoInfo()
getHotVideo()