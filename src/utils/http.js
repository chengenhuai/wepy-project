export default {
    post(url, params){
        return new Promise((resolve, reject)=>{
            wx.request({
                url,
                data:params,
                method: 'post',
                success(res) {
                  if(res.statusCode==200){
                      resolve(res.data)
                  } else {
                      reject(res)
                  }
                }
            });
        })
    },
    get(url){
        return new Promise((resolve, reject) => {
            wx.request({
                url,
                success(res) {
                    if (res.statusCode == 200) {
                        resolve(res.data)
                    } else {
                        reject(res)
                    }
                }
            });
        })
    },
    all(queryList){
        return Promise.all(queryList)
    }
}