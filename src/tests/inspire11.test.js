import { Selector } from 'testcafe';
import JobsPage from '../../pom/pages/jobsPage';
import {userData} from '../../utilities'
import NavLinks from '../../pom/components/cilickLinks';
import JobOppening from '../../pom/components/jobOppeningBtn';
import HealthcarePage from '../../pom/pages/workPage';
import Input from '../../pom/pages/fillForms';
import SubmitBtn from '../../pom/components/submitBtn';
import ValidateEmail from '../../pom/components/validate';
import YourPage from '../../pom/components/attachBtn';
import testData from '../../test_data.json';



fixture`Testing a Web App`
  .page(userData.URL);

const jobsPage = new JobsPage();
const navlinks = new NavLinks() 
const joboppeningbtn = new JobOppening()
const healthcarePage = new HealthcarePage()
const input = new Input()
const yourPage = new YourPage()
const submitBtn = new SubmitBtn()
const validate = new ValidateEmail()


test.meta({ testID: 'Case-1' })('Test Case One',async (t) => {

  await navlinks.clickOption(userData.navOptionsCarrer)
  
  
  const currentUrl = await joboppeningbtn.getCurrentUrl();
  await t.expect(currentUrl).contains(userData.careersUrl);
  
  await joboppeningbtn.clickViewJobOpeningsButton('VIEW JOB OPENINGS')

  

  const departmentDropdown = await jobsPage.clickDepartmentDropdown();
  await departmentDropdown.selectOption(userData.departmentOption)

  const officeDropdown = await jobsPage.clickOfficeDropdown()
  await officeDropdown.selectOption(userData.countryOption)



  await jobsPage.validateJobOppenings();

});

test.meta({ testID: 'Case-2' })('Test Case Two',async (t) => {
  await navlinks.clickOption(userData.navOptionsWork)

  
  const { titles, tags } = await healthcarePage.getHealthcareCards();
  for (let i = 0; i < titles.length; i++) {
    console.log('TITLE:', titles[i]);
    console.log('TAG:', tags[i]);

  }

});

test.meta({ testID: 'Case-3' })('Test Case Three',async (t) => {
  await navlinks.clickOption(userData.navOptionsCarrer) 
  await joboppeningbtn.clickViewJobOpeningsButton('VIEW JOB OPENINGS')

  
  const officeDropdown = await jobsPage.clickOfficeDropdown()
  await officeDropdown.selectOption(userData.countryOption)  
  
  await navlinks.clickOption(userData.SDET)
  await navlinks.clickOption(userData.applyBtn)

  await input.fillName('Nedim')
  await input.fillLastName('Asani')

  for (let i = 0; i < testData.emails.length; i++) {
    const email = testData.emails[i];

    await input.login(email);

    await t
      .selectText(input.emailInput)
      .pressKey('delete');
  }

  await input.fillPhone('389/70/920/876')

  const filePath = userData.filepath;

  await t.click(yourPage.attachButton);
  await yourPage.uploadFile(filePath);
  
  await t.click(yourPage.attachButtonCL);
  await yourPage.uploadFileCoverLetter(filePath);

  await input.fillLinkedln('Nedim Asani')
  await input.fillWebsite('www.example.com')
  await input.fillJob('I heard about this job in linkedln')

  await submitBtn.clickSubmitBtn()

  await validate.validateEmailContent()


   
  
});
  