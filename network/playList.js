import {request} from "./request"
//获取歌单详情
export function getPlayListDetail(id)
{
  return request({
    url:'/playlist/detail',
    data:{
      id
    }
  })
}
//获取热门歌单分类
export function getHotPlaylist(){
  return request({
    url:"/playlist/hot"
  })
}
//获取分类下歌单
export function getCatePlaylist(cat,offset=0,limit=30){
  return request({
    url:'/top/playlist',
    data:{
      cat,
      offset,
      limit
    }
  })
}