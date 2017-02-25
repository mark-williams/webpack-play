import $ from './select';

window.onload = function onLoad() {
  const ps = $('p');
  for (let i=0; i < ps.length; i++) {
    ps[i].style.color = '#444488';
  }
};



