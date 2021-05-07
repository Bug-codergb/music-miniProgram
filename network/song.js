import {request} from "./request"
//获取歌曲详情
export function getSongDetail(ids)
{
  return request({
    url:"/song/detail",
    data:{
      ids:ids
    }
  })
}