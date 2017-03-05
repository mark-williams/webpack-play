import $ from './select';
import style from '../style/style.css';

window.onload = function onLoad() {
  const ps = $('p');
  for (let i = 0; i < ps.length; i++) {
    ps[i].className = 'enhanced';
  }
};


