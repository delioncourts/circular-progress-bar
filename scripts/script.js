const round = document.querySelector('.round');
const spinner = document.querySelector('.spinner');
const input = document.querySelector('.value');

const hide = () => {
  spinner.classList.toggle('round__hide');
};

const spin = () => {
  spinner.classList.toggle('round__spin');
};

const filledChange = () => {
  const inputValue = document.querySelector('.value').value;
  const filledCircle = document.querySelector('.filled__circle');

  const percentage = Math.min(1, Math.max(0, inputValue / 100));

  // длина синей обводки в зависимости от введенного процента
  const dashOffset = 439.6 - (percentage * 439.6); 
  filledCircle.style.strokeDashoffset = dashOffset + 'px';
}

input.addEventListener('input', filledChange);
