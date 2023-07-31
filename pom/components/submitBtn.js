import { Selector, t } from 'testcafe';

export default class SubmitBtn {
  constructor() {
    this.submitBtn = Selector('#submit_app');
  }
 
  async clickSubmitBtn() {
    await t.click(this.submitBtn)
  }
}
