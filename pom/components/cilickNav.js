import { Selector, t } from 'testcafe';

export default class Nav {
  constructor() {
    this.navLink = Selector('a');
  }

  async clickOption(option) {
    const navOption =  this.navLink.withText(option)
    return await t.click(navOption)
  }
}