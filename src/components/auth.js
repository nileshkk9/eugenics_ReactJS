class Auth {
  constructor() {
    this.authenticated = false;
  }
  login(cb) {
    this.authenticated = true;
    cb();
  }
  logout(cb) {
    this.authenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
}
const auth = new Auth();
export default auth;
