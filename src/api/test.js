const test = (data, callBack) => {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      callBack(xhr)
    }
  }
  xhr.open('post', '/v1/mail', true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(data))
}

const assert01 = (xhr) => {
  let data = JSON.parse(xhr.responseText)
  let status = xhr.status
  let header = xhr.responseHeaders
  console.assert(status >= 200 && status < 300 || status === 304, `res状态码异常：${status}`)
  console.assert(data.id, '返回值id字段不存在')
  console.assert(data.status, '返回值status字段不存在!')
  console.assert(!isNaN(data.id), '返回值id字段为NaN!')
  console.assert(typeof data.id === 'number', `返回值id字段类型不为number！${typeof data.id}`)
  console.assert(data.status === 'success', `返回值status字段不为success:${data.status}`)
  console.log('assert01执行完成')
  return true
}

let testData = {name: '陈琪', address: 'chen_qi@kedacom.com'}
