import { Selector, t } from 'testcafe';
import { userData } from '../../utilities';


export default class ValidateEmail {
  constructor() {
    this.validateEmail = Selector('div.field-error-msg#email_error')
   
  }
  async validateEmailContent(){
    await t.expect(this.validateEmail.textContent).contains(userData.validateEmail);
  }
}
