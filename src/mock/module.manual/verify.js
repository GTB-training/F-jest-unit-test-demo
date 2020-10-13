const verifyPassword = (password) => {
  const regexExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
  return regexExp.test(password);
};

const verifyUsername = (username) => {
  return username;
};

export { verifyPassword, verifyUsername };
