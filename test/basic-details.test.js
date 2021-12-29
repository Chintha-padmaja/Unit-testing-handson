import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

let el;
describe('Basic details', () => {
   before(async () => {
     el =  await fixture(html`<basic-details></basic-details>`);
   });

   it('Accessible' , async () =>{
     expect(el).to.be.accessible();
   });

   it('check for the form class form basic' , async () => {
     const div = el.shadowRoot.querySelector('div');
     expect(div).to.exist;
     expect(div).to.have.class('form-basic');
   });


  // Write test cases inside this block
  // refer basic-details.js files
});
