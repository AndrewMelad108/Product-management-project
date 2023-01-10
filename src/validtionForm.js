var passwordValue;
const validatePass = (rule, value, callback) => {
  passwordValue = value;
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  if (value === "") {
    callback(new Error("Please input the password"));
  } else if (!regex.test(value)) {
    callback(
      new Error(
        "This file is required! password include A->1-9->z"
      )
    );
  } else {
    callback();
  }
};
const validateConfirm = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("This file is required!"));
  } else if (value !== passwordValue) {
    callback(new Error("Two inputs don't match!"));
  } else {
    callback();
  }
};
const validateName = (rule, value, callback) => {
  const name = /^[a-zA-Z]/;
  if (value === "") {
    callback(new Error("This file is required!"));
  } else if (!name.test(value)) {
    callback(new Error("This file is required!"));
  } else {
    callback();
  }
};
const validateInteger = (rule, value, callback) => {
  // const quantity = /^(?=.*[0-9])/;
  if (value === "") {
    callback(new Error("This file is required!"));
  }else {
    callback();
  }
};

export {
  validatePass,
  validateConfirm,
  validateName,
  validateInteger
};
