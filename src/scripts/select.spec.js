import { expect } from 'chai';
import $ from './select';
import jsDom from 'jsdom';

describe('select tests', () => {
  let html;
  beforeEach(() => {
    html = `<html>
              <body>
                <div class="container" id="container-id">
                  <p>Test 1</p>
                  <p>Test 2</p>
                  <p class="last-para">Test 3</p>
                </div>
              </body>
            </html>`;

    const doc = jsDom.jsdom(html);
    const win = doc.defaultView;

    global.document = doc
    global.window = win
  });

  describe('with container specified', () => {
    it('should return all elements matching selector', () => {
      const eles = $('p', window.document);
      checkParas(eles);
    });

    it('should select by class name', () => {
      const container = $('.container');
      expect(container[0].id).to.equal('container-id');
    });

    it('should select by class id', () => {
      const container = $('#container-id');
      expect(container[0].className).to.equal('container');
    });
  });

  describe('with no container specified', () => {
    it('should return all elements matching selector', () => {
      const eles = $('p');
      checkParas(eles);
    });
  });
});

const checkParas = (paras) => {
  expect(paras.length).to.equal(3);
  for (let i = 0; i < paras.length; i++) {
    checkInner(paras[i], i);
  }
}; 

const checkInner = (ele, index) => {
  const expected = `Test ${index + 1}`;
  expect(ele.innerHTML).to.equal(expected);
};


