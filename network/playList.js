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