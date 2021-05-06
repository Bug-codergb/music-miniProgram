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