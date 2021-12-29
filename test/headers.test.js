import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/header/Header.js';

let el;
describe('loan-header', () => {
  before(async () => {
    el =  await fixture(html`<loan-header></loan-header>`);
  });

  it('Accessible' , async () =>{
    expect(el).to.be.accessible();
  });

  it('check for the form class form basic' , async () => {
    const div = el.shadowRoot.querySelector('div');
    expect(div).to.exist;
    expect(div).to.have.class('container');
  });
  

  // Write test cases inside this block
});
