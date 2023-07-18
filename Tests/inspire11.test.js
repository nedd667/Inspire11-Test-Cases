import { Selector } from 'testcafe';
import CareerPage from '../Pages/carrer.page';
import JobsPage from '../Pages/jobs.page';
import {userData} from '../utilities'

fixture`Testing a Web App`
  .page`https://www.inspire11.com/`;

const careerPage = new CareerPage();
const jobsPage = new JobsPage();


test('Test Case One',async (t) => {
  await t.maximizeWindow();

  await careerPage.clickCareersLink();
  
  const currentUrl = await careerPage.getCurrentUrl();
  await t.expect(currentUrl).contains('/careers');


  await careerPage.clickViewJobOpeningsButton();

  

  const departmentDropdown = await jobsPage.clickDepartmentDropdown();

  await departmentDropdown.selectOption(userData.departmentOption)

  const officeDropdown = await jobsPage.clickOfficeDropdown()
  await officeDropdown.selectOption(userData.countryOption)



  await jobsPage.validateJobOppenings();

});
