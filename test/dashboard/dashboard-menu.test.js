import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../../src/dashboard/Dashboard-menu.js';

const  el =  await fixture(html`<dashboard-menu></dashboard-menu>`);
const button = el.shadowRoot.querySelector('button');
describe('Dashboard Menu', () => {
   it('Accessible' , async () =>{
     expect(el).to.be.accessible();
   });

   it('checks for spy', () => {
    const fun = Sinon.spy(el,"_setTypeInLS");
    button.click();
    expect(fun.calledOnce).to.be.true;
  });
   
  


  


  // Write test cases inside this block
  // refer basic-details.js files
});
