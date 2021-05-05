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