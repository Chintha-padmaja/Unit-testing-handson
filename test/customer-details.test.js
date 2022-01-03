import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/Customer/Customer-details.js';

const el = await fixture(html`<customer-details></customer-details>`);
const button =  el.shadowRoot.querySelector('lion-button');
describe('customer details', () => {
 it('checks for emideatils method' , () => {
   const func = Sinon.spy(el,"_toEmidetails");
   button.click();
   expect(func.calledOnce).to.be.true;
 });
  // Write test cases inside this block
});
