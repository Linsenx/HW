let config = function() {
  this.SERVER = 'http://club.qinyongli.cn:8080'
  this.API_USER_LOGIN = `${this.SERVER}/user/login`
  this.API_USER_REGISTER = `${this.SERVER}/user/logup`
  this.API_USER_GETINFO = `${this.SERVER}/user/info`
  this.API_USER_SETINFO = `${this.SERVER}/user/info/edit`
}
module.exports = new config()