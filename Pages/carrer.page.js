import { Selector, t } from 'testcafe';

export default class CareerPage {
  constructor() {
    this.viewJobOpeningsButton = Selector('.et_pb_button.et_pb_button_0.et_hover_enabled.et_pb_bg_layout_light');
  }



  async getCurrentUrl() {
    return await t.eval(() => window.location.href);
  } 
  async clickViewJobOpeningsButton() {
    await t.click(this.viewJobOpeningsButton).maximizeWindow();
  }
}
