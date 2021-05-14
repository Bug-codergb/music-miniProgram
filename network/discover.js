import {request} from "./request";
export function getBanner()
{
  return request({
    url:'/banner',
    data:{
      type:1
    }
  })
}
//获取推荐歌单
export function getRecPlaylist(limit)
{
  return request({
    url:'/personalized',
    data:{
      limit
    }
  })
}
//获取歌单列表
export function getPlaylist(cat="华语",offset=0,limit=10)
{
  return request({
    url:'/top/playlist',
    data:{
      cat,
      offset,
      limit
    }
  })
}
//获取歌单详情
export function getPlaylistDetail(id)
{
  return request({
    url:"/playlist/detail",
    data:{
      id
    }
  })
}
//获取最新音乐
export function getNewMusic(limit)
{
  return request({
    url:"/personalized/newsong",
    data:{
      limit
    }
  })
}
//新碟上架
export function getNewAlbum(offset,limit)
{
  return request({
    url:"/album/new",
    data:{
      offset,
      limit
    }
  })
}
//数字专辑
export function getDigitalAlbum(offset,limit)
{
  return request({
    url:'/album/list',
    data:{
      offset,
      limit
    }
  })
}
//获取排行榜
export function getAllRank()
{
  return request({
    url:'/toplist'
  })
}

