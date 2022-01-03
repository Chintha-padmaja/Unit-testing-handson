import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

const el = await fixture(html`<basic-details></basic-details>`);
const form = el.shadowRoot.querySelectorAll('lion-button');
describe('Basic details', () => {
  it('checks for spy', () => {
    const fun = Sinon.spy(el,"_toDashboard");
    form[0].click();
    expect(fun.calledOnce).to.be.true;
  });

  it('check for accessebility', () => {
    expect(el).to.be.accessible;
  });

  // it('checks for spy', () => {
  //   const fun = Sinon.spy(el,"_captureDetails");
  //   form[1].click();
  //   expect(fun.calledOnce).to.be.true;
  // });
});
