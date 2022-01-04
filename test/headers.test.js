import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
import '../src/header/Header.js';

const  el =  await fixture(html`<loan-header></loan-header>`);
const button = el.shadowRoot.querySelectorAll('button');
describe('loan-header', () => {
  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });

  it('check for the form class form basic' , async () => {
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.have.class('container');
  });
  
  it('checks for the language change', async() => {
    const func = Sinon.spy(el,"localeChanged");
    button[0].click();
    expect(func.calledOnce).to.be.true;
    func.restore();
  });

  it('check for the color change of button', async() => {
    button[0].click();
    expect(button[0]).to.have.class('bg-btn-color');
   // expect(func.calledOnce).to.be.true;
  });

  it('check for the color change of button', async() => {
    button[0].click();
    expect(button[1]).to.have.class('btn-cursor');
   // expect(func.calledOnce).to.be.true;
  });

  it('check for the color change of button', async() => {
    button[1].click();
    expect(button[1]).to.have.class('bg-btn-color');
   // expect(func.calledOnce).to.be.true;
  });


  // Write test cases inside this block
});
