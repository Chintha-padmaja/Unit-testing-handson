import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';

const el = await fixture(html`<customer-details></customer-details>`);
const button =  el.shadowRoot.querySelectorAll('lion-button');

describe('customer details', () => {
it('check for accessibility', () => {
  expect(el).to.be.accessible;
});

it('spy the toEmidetails method',()=>{
  const func = Sinon.spy(el,"_toEmidetails");
  button[0].click();
  expect(func.calledOnce).to.be.true;
});

// it('check for submithandler', async() => {
//   await el.shadowRoot.querySelector('lion-button').click();
//   const form = el.shadowRoot.querySelector('lion-form');
//   await el.updateComplete;
//   expect(form.hasFeedbackFor[1]).to.equal('error');
// });
  // Write test cases inside this block
});
