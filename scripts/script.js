const round = document.querySelector('.round');
const spinner = document.querySelector('.spinner');
const value = document.querySelector('.value');

const hide = () => {
  spinner.classList.toggle('round__hide');
};

const spin = () => {
  spinner.classList.toggle('round__spin');
};

const onChange = (evt) => {
  console.log(this.value);
};

value.addEventListener('input', onChange, false);
