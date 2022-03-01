const Mock = require('mockjs')
// const axios = require('axios')

const Random = Mock.Random

Mock.mock(RegExp('/mock/video/gufeng/.*'), 'get',option => {
    let num = option.url.split('/')[option.url.split('/').length - 1]
    let videos = [...Array(Number(num)).keys()].map(() => {
        return {
            img: 'https://cdn.seovx.com/ha/?mom=302',
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

Mock.mock(RegExp('/mock/video/bili/.*'), 'get', option => {
    let num = option.url.split('/')[option.url.split('/').length - 1]
    let videos = [...Array(Number(num)).keys()].map((i) => {
        return {
            img: require(`./assets/Bilipic/video${i + 1}.webp`),
            title: Random.cword(5,9),
            time:Random.date('MM-dd'),
            upName:Random.cname(),
            id:Random.csentence(5,9),
            label:'',
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
            label:'',
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

Mock.mock('/mock/hot','get',() => {
    let videos = [...Array(Number(20)).keys()].map(() => {
        return {
            img: Random.dataImage('500x250', Random.first()),
            title: Random.csentence(5,9),
            time:Random.date('MM-dd'),
            upName:Random.cname(),
            id:Random.csentence(5,9),
            label:'人气飙升',
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

Mock.mock('/mock/swipe','get',() => {
    let swipes = [...Array(3).keys()].map((i) => {
        return {
            img:require(`./assets/Bilipic/swipe${i+1}.webp`),
            title:Random.csentence(6,12)
        }
    })
    // return swipes
    return {swipes}
})

Mock.mock('/mock/relation','get',() => {
    let videos = [...Array(Number(20)).keys()].map(() => {
        return {
            img: Random.dataImage('500x250', Random.first()),
            title: Random.csentence(5,9),
            time:Random.date('MM-dd'),
            upName:Random.cname(),
            id:Random.csentence(5,9),
            label:'人气飙升',
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