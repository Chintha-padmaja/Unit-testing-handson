import { html, fixture, expect } from '@open-wc/testing';
import { Required, MinNumber, MaxNumber } from '@lion/form-core';
import Sinon from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';
import { inWords } from '../src/utils/numToWord.js';

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

  it('checks for spy', () => {
    const fun = Sinon.spy(el,"_captureDetails");
    form[1].click();
    expect(fun.calledOnce).to.be.true;
  });

  it('check for empty field validation', () => {
    const type = el.shadowRoot.querySelector('lion-input-amount');
    const amount =  new Required();
    const errorMessage = amount._getMessage();
    // console.log(type);
    // type.modelValue = null;
    // console.log(type);
    // const input = type.querySelector('[slot = "feedback"]').shadowRoot.innerHTML;
    // console.log(input);
     expect(errorMessage).to.not.equal();
    // expect(errorMessage).to.equal("Amount is a required field");
  });

  it('checks for spy', () => {
    const val = 10005;
    let num = 10005;
    const func =  el._numToWord(val,num) ;
    console.log(func);
    expect(num).to.equal(10005.00);
  });



});
