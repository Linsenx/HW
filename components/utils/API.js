import 'whatwg-fetch'
import config from '~/components/utils/Config.js'

export default  {
  makePost: function(data) {
    return {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      },
      body: JSON.stringify(data) 
    }
  },
  isLogin: function() {
    if (localStorage.getItem('autoLogin') == 'true') 
      return localStorage.getItem('isLogin') == 'true' 
    else
      return sessionStorage.getItem('isLogin') == 'true'
  },
  getUserInfo: async function() {
    if (this.isLogin()) {
      try { 
        let req = await fetch(config.API_USER_GETINFO, { credentials: 'include' })
        let res = await req.json()
        return res
      } catch(err) {
        console.log(err)
        return -1
      }
    }
    return -1
  },
  setUserInfo: async function(user) {
    if (this.isLogin()) {
      try {
        let req = await fetch(config.API_USER_SETINFO, { ...this.makePost(user) })
        let res = await req.json()
        return res
      } catch(err) {
        console.log(err)
        return -1
      }
    }
    return -1
  },
  login: async function(username, password, autoLogin) {
    let data = {
      Account: username,
      Password: password
    }
    let req = await fetch(config.API_USER_LOGIN, { ...this.makePost(data) })
    let res = await req.json()
    console.log(res)
    if (res.err == 0) {
      if (autoLogin) {
        localStorage.setItem('autoLogin', true)
        localStorage.setItem('isLogin', true)
      } else {
        localStorage.setItem('autoLogin', false)
        sessionStorage.setItem('isLogin', true)
      }
    }
    return res
  },
  logout: function() {
    localStorage.clear()
    sessionStorage.clear()
  }
}
