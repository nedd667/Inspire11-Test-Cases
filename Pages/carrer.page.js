import { Selector, t } from 'testcafe';

export default class CareerPage {
  constructor() {
    this.careersLink = Selector('a').withText('Careers');
    this.viewJobOpeningsButton = Selector('.et_pb_button.et_pb_button_0.et_hover_enabled.et_pb_bg_layout_light');
  }

  async clickCareersLink() {
    await t.click(this.careersLink);
  }

  async getCurrentUrl() {
    return await t.eval(() => window.location.href);
  }
  async clickViewJobOpeningsButton() {
    await t.click(this.viewJobOpeningsButton);
  }
}
