import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';

let el;
describe('Loan EMI details', () => {
  before(async () => {
    el =  await fixture(html`<loanemi-details></loanemi-details>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });

  it('check for the h2 heading' , async () => {
    const h2  = el.shadowRoot.querySelector('h2');
    expect(h2).to.exist;
    expect(h2.textContent).to.equal('EMI Details');
  });
  // Write test cases inside this block
});
