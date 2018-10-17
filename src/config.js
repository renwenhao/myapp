import axios from 'axios'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';


axios.interceptors.request.use(function(config){
    console.log('config',config);
    Toast.loading('Loading...', 30, () => {
        console.log('Load complete !!!');
    });
    config.timeout = 1;
    // config.parma
    return config
})

axios.interceptors.response.use(function(config){
    setTimeout(() => {
        Toast.hide();
      }, 3000);
      console.log('responseConfig',config);
    return config
})


