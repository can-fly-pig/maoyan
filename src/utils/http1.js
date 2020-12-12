const preUrl = "http://pudge.wang:3080/api";
import qs from "qs";
const http = {
  get(url, data) {
    if (data) {
      url += "?";
      let arr = Object.keys(data);
      arr.map(item => {
        return item + "=" + data[item];
      });
      url += arr.join("&");
    }
    return fetch(preUrl + url).then(response => response.json());
  },
  post(url, parmas) {
    return fetch(preUrl + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: qs.stringify({
        ids: parmas
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.status === 0) {
          return json;
        } else {
          console.log(json.msg);
        }
      });
  }
};

export default http;
