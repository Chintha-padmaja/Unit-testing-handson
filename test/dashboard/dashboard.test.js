import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../../src/dashboard/Dashboard.js';

let el;
describe('Basic details', () => {
   before(async () => {
     el =  await fixture(html`<dash-board></dash-board>`);
   });

   it('Accessible' , async () =>{
     expect(el).to.be.accessible();
   });

  


  // Write test cases inside this block
  // refer basic-details.js files
});
