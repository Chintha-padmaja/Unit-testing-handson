import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

let el;
describe('Success screen ', () => {
  before(async () => {
    el =  await fixture(html`<loan-success></loan-success>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });

  // Write test cases inside this block
});

describe('error screen', () => {
  before(async () => {
    el =  await fixture(html`<loan-error></loan-error>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });
  // Write test cases inside this block
});
