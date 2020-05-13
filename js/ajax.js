//使用promise封装原生的ajax请求

let baseUrl="https://api.it120.cc/"  //公共地址，例如：https://api.it120.cc/

//完整版本：ajax封装
/*
export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	type = type.toUpperCase();
	url = baseUrl + url;

	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	if (window.fetch && method == 'fetch') {
		let requestConfig = {
			credentials: 'include',
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			mode: "cors",
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}

*/

function ajax(url, method = 'get', data) {
	
	//封装promise考虑传参，loading处理，报错处理，toast，header头的处理

    return new Promise((resolve, reject) => {
       
        //创建ajax对象
        if (window.XMLHttpRequest) {
            //w3c标准
            var xhr = new XMLHttpRequest();
        } else { 
            //兼容IE低版本
            var xhr = new ActiveXObject('microsoft.XMLHttp')
        }

        //open
       if (method === 'GET') {
            xhr.open(method,url)
        }

        if (method === 'post') {
            xhr.setRequestHeader('content-type','application/x-form-www-urlencdoed')
            xhr.open(method,url)
        }

        //send

        xhr.send();
       

        //监听请求，状态处理

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    
                    //成功返回
                    resolve(JSON.parse(xhr.responseText))

                } else {
                    //失败处理
                    reject('请求有误')
                }
            }

        }



   });
    
}

ajax().then(
	//成功返回
	res => {
	
})
	//报错
	.catch(error => {
	 
 })
