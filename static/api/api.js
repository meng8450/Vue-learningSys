import axios from 'axios'
import config from './config'
/**
 * @fatdoge
 * 登录
 */
let login= function (username, password) {
    axios.get(config.loginUrl)
        .then(function (res) {
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });  
}
/**
 * @fatdoge
 * 注册
 */
let register= function (info) {

}

console.log('api.js loaded...')
export default {
    login,
    register
}
