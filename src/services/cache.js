/**
 * Created by jsonliu on 2017/10/17.
 */
export default { 
  
  getGUID() {
    let guid = localStorage.getItem('guid')
    if (!guid) {
      guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
      localStorage.setItem('guid', guid)
    }
    return guid
  }
}
