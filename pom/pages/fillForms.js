import { Selector, t } from 'testcafe';

export default class Input {
  constructor() {
    this.firstName = Selector('#first_name');
    this.lastName = Selector('#last_name');
    this.emailInput = Selector('#email');
    this.phone = Selector('#phone');
    this.linkedln = Selector('#job_application_answers_attributes_0_text_value');
    this.website = Selector('#job_application_answers_attributes_1_text_value')
    this.hearJob = Selector('#job_application_answers_attributes_2_text_value')

  }

  async fillName(name) {
    await t.typeText(this.firstName,name);
  }
  async fillLastName(lastname) {
    await t.typeText(this.lastName,lastname);
  }
  async login(email) {
    await t
      .typeText(this.emailInput, email)
     
  }
  async fillPhone(phone) {
    await t.typeText(this.phone,phone);
  }
  async fillLinkedln(linkedln) {
    await t.typeText(this.linkedln,linkedln);
  }
  async fillWebsite(website) {
    await t.typeText(this.website,website);
  }
  async fillJob(job) {
    await t.typeText(this.hearJob,job);
  }
  }
