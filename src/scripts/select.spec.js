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
  });

  describe('with container specified', () => {
    it('should return all elements matching selector', (done) => {
      jsDom.env(html, (err, window) => {
        if (err) {
          throw err;
        }
        const eles = $('p', window.document);
        checkParas(eles);

        done();
      });
    });

    it('should select by class name', (done) => {
        jsDom.env(html, (err, window) => {
        if (err) {
          throw err;
        }

        const container = $('.container');
        expect(container[0].id).to.equal('container-id');

        done();
      });
    });

    it('should select by class id', (done) => {
        jsDom.env(html, (err, window) => {
        if (err) {
          throw err;
        }

        const container = $('#container-id');
        expect(container[0].className).to.equal('container');

        done();
      });
    });
  });

  describe('with no container specified', () => {
    // Where no container is specified we need to make the window and document objects available globally
    it('should return all elements matching selector', (done) => {
      var doc = jsDom.jsdom(html);
      var win = doc.defaultView

      global.document = doc
      global.window = win

      const eles = $('p');
      checkParas(eles);
    
      done();
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


