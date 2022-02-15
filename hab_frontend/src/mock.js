const Mock = require('mockjs')

const Random = Mock.Random

Mock.mock(RegExp('/mock/video/.*'), 'get', option => {
    let num = option.url.split('/')[option.url.split('/').length - 1]
    let videos = [...Array(Number(num)).keys()].map((i) => {
        return {
            img: require(`./assets/Bilipic/video${i + 1}.webp`),
            title: Random.cword(5,9),
            time:Random.date('MM-dd'),
            upName:Random.cname(),
            id:Random.csentence(5,9),
            comments:[...Array(Math.round(Math.random() * 10)).keys()].map(() => {
                let name = Random.cname()
                return {
                    avatar:Random.dataImage('60x60', Random.cword(name)),
                    name,
                    content:Random.csentence(2,9),
                    time:Random.date('MM-dd'),
                }
            })
        }
    })
    return {
        videos
    }
})

Mock.mock(RegExp('/mock/ads/.*'), 'get', option => {
    let num = option.url.split('/')[option.url.split('/').length - 1]
    let videos = [...Array(Number(num)).keys()].map((i) => {
        return {
            img: require(`./assets/Bilipic/tuiguang${i + 1}.png`),
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