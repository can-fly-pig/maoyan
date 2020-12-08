import qs from "qs";
//封装请求
const urls = "http://pudge.wang:3080/api";
const http = {
  get(backurl, data) {
    if (data) {
      backurl += "?";
      let arr = Object.keys(data);
      arr.map(item => {
        return item + "=" + data[item];
      });
      backurl += arr.join("&");
    }
    return fetch(urls + backurl).then(response => response.json());
  },
  post(url,params) {
    return fetch(urls + url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify(params)
    })
        .then(res => res.json())
        .then(res => {
          if(res.status == 0) {
            return res;
          }else {
            console.log(res.msg);
          }
        })
  }
};

export default http;
