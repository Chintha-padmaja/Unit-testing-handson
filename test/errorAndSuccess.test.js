import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

let el;
describe('Success screen ', () => {
  beforeEach(async () => {
    el =  await fixture(html`<loan-success></loan-success>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });
  
  it('checks for home method' , () => {
    const func = Sinon.spy(el,"_toHome");
    const button = el.shadowRoot.querySelectorAll('lion-button');
    button[0].click();
    expect(func.calledOnce).to.be.true;
  });
  // Write test cases inside this block
});

describe('error screen', () => {
  beforeEach(async () => {
    el =  await fixture(html`<loan-error></loan-error>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });

   
  it('checks for home method' , () => {
    const func = Sinon.spy(el,"_toHome");
    const button = el.shadowRoot.querySelectorAll('lion-button');
    button[0].click();
    expect(func.calledOnce).to.be.true;
  });

  // Write test cases inside this block
});
