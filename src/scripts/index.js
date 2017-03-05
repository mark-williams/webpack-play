import $ from './select';
import '../style/style.scss';

window.onload = function onLoad() {
  const ps = $('p');
  for (let i = 0; i < ps.length; i++) {
    ps[i].className = 'enhanced';
  }
};


