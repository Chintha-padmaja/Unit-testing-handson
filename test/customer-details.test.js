import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

let el;
describe('customer details', () => {
  before(async () => {
    el =  await fixture(html`<customer-details></customer-details>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });
  // Write test cases inside this block
});
