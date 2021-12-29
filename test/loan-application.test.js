import { html, fixture, expect } from '@open-wc/testing';
import './dashboard/Dashboard.js';
import '../loan-application.js';

let el;
describe('LoanApplication', () => {
  before(async () => {
    el =  await fixture(html`<loan-application></loan-application>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });
  // Write test cases inside this block
});
