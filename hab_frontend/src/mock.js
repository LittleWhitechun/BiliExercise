const Mock = require('mockjs')

const Random = Mock.Random

Mock.mock(RegExp('/mock/video/.*'), 'get', option => {
    let num = option.url.split('/')[option.url.split('/').length - 1]
    let videos = [...Array(Number(num)).keys()].map((i) => {
        console.log(` now is number ${i}`)
        return {
            img: require(`./assets/Bilipic/video${i + 1}.webp`),
            title: Random.csentence(5,9),
            time:Random.date('MM-dd'),
            upName:Random.cname(),
            id:Random.csentence(5,9),
        }
    })
    return {
        videos
    }
})