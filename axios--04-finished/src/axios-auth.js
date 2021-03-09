import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-demo-8a740-default-rtdb.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance