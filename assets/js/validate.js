//========== VALIDATION FUNCTIONS +++++++++++

function email(email) {
  const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (valid) {
    return true;
  } else {
    console.log(".  Please enter a valid email");
    return false;
  }
}

function text(val) {
  if (val.trim()) {
    return true
  } else {
    console.log(' Invalid Input.');
    return false
  }
}

function number(val) {
  if (parseInt(val.trim())) {
    return true
  } else {
    console.log(' Must be a Number');
    return false
  }
}

module.exports = { text, email, number }