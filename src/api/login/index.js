
class LoginApi{
  login(username, password) {
    const user = {
      id: 1,
      username: "admin",
      password: "admin"
    };

    return new Promise((resolve, reject) => {
      if(username === user.username &&password === user.password) {
        return resolve({
          id: 1,
          username: user.username
        });
      } else {
        return reject({
          message: 'invalid credentials'
        });
      }
    });
  }
};

export default new LoginApi();