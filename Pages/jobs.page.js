import { Selector, t } from 'testcafe';
import Dropdown from '../pom/components/Dropdown';
import {userData} from '../utilities'


export default class JobsPage {
  constructor() {
    this.departmentDropdown = Selector('#select2-chosen-1');
    this.officeDropdown = Selector('#select2-chosen-2');
    this.validateJobs = Selector('h3')
  }

  async clickDepartmentDropdown() {
    await t.click(this.departmentDropdown);
    return new Dropdown()
  }

    async clickOfficeDropdown() {
      await t.click(this.officeDropdown);
      return new Dropdown()
    }
  
    async validateJobOppenings(){
      await t.expect(this.validateJobs.textContent).contains(userData.validateJobs);
    }
}
