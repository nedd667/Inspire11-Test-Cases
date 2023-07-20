import { Selector } from 'testcafe';
import CareerPage from '../../Pages/carrer.page';
import JobsPage from '../../pages/jobs.page';
import {userData} from '../../utilities'
import Nav from '../../pom/components/cilickNav';
import HealthcarePage from '../../pages/work.page';

fixture`Testing a Web App`
  .page(userData.URL);

const careerPage = new CareerPage();
const jobsPage = new JobsPage();
const nav = new Nav()
const healthcarePage = new HealthcarePage()

test.meta({ testID: 'Case-1' })('Test Case One',async (t) => {
  await t.maximizeWindow();

  await nav.clickOption('Careers')

  
  const currentUrl = await careerPage.getCurrentUrl();
  await t.expect(currentUrl).contains(userData.careersUrl);

  await careerPage.clickViewJobOpeningsButton();

  

  const departmentDropdown = await jobsPage.clickDepartmentDropdown();
  await departmentDropdown.selectOption(userData.departmentOption)

  const officeDropdown = await jobsPage.clickOfficeDropdown()
  await officeDropdown.selectOption(userData.countryOption)



  await jobsPage.validateJobOppenings();

});

test.meta({ testID: 'Case-2' })('Test Case Two',async (t) => {
  await t.maximizeWindow();
  await nav.clickOption('Work')

  
  const { titles, tags } = await healthcarePage.getHealthcareCards();
  for (let i = 0; i < titles.length; i++) {
    console.log('TITLE:', titles[i]);
    console.log('TAG:', tags[i]);

  }

});




