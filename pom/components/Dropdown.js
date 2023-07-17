import { Selector, t } from 'testcafe';

export default class Dropdown {
  constructor() {
    this.techOption = Selector('.select2-result-label')
  }

  async selectOption(option) {
    const dropdownOption =  this.techOption.withText(option)
    return await t.click(dropdownOption)
  }
}
