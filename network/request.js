const baseURL="http://8.140.110.78:3000"
export function request(options)
{
  return new Promise((resolve,reject)=>{
    wx.request({
      url:baseURL+options.url,
      method:options.method||'get',
      data:options.data||{},
      success:function(res){
        resolve(res.data)
      },
      fail:function(err)
      {
        reject(err)
      }
    })
  })
}