// alert('Hellow World');

const showAlert = () => {
  const num = Math.random() * 10;
  if (num < 5) {
    alert('Hello');
  }
};

const askSomething = () => {
  const decision = confirm('Are you coming to the picnic?');
  console.log(decision);

  if (decision === true) {
    alert('Please send 500 BDT');
  } else {
    console.log('Tata Bye Bye');
  }
};

const getUserInfo = () => {
  const name = prompt('Tell Us Your Name');
  if (!!name) {
    console.log('Wellcome Here', name);
  }
};
