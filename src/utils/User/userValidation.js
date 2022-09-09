export const checkValidityId = (id) => {
  if (id.length < 5) {
    return [false, "5~12자를 입력하세요"];
  } else if (id.length > 12) {
    return [false, "5~12자를 입력하세요"];
  } else {
    if (isRuleId(id)) {
      return [true, "사용 가능"];
    }
    return [false, "사용 불가능"];
  }
};

export const checkValidityPassword = (password) => {
  if (password.length < 8) {
    return [false, "숫자, 특수문자 포함"];
  } else if (password.length > 16) {
    return [false, "숫자, 특수문자 포함"];
  } else {
    if (isRulePassword(password)) {
      return [true, "사용 가능"];
    }
    return [false, "사용 불가능"];
  }
};

export const checkDoublePassword = (target, value) => {
  if (value !== target) {
    return [false, "비밀번호 불일치"];
  } else {
    return [true, "사용 가능"];
  }
};

export const checkValidityNickname = (nickname) => {
  if (nickname.length < 2) {
    return [false, "2~10자를 입력하세요"];
  } else if (nickname.length > 10) {
    return [false, "2~10자를 입력하세요"];
  } else {
    if (isRuleNick(nickname)) {
      return [true, "사용 가능"];
    }
    return [false, "사용 불가능"];
  }
};

const isRuleId = (asValue) => {
  const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
  return regExp.test(asValue);
};

const isRulePassword = (asValue) => {
  const regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
  return regExp.test(asValue);
};

const isRuleNick = (asValue) => {
  const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣]*$/;
  return regExp.test(asValue);
};
