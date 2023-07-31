import { Selector, t } from 'testcafe';

export default class Links {
  constructor() {
    this.linkOption = Selector('a');
  }

  async clickOption(options) {
    const option =  this.linkOption.withText(options)
    return await t.click(option)
  }
  

  async getCurrentUrl() {
    return await t.eval(() => window.location.href);
  } 
  async clickViewJobOpeningsButton(options) {
   
    const option1 =  this.linkOption.withText(options)
    return await t.click(option1).maximizeWindow();
  }
  
}