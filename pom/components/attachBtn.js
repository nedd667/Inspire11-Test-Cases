import { Selector, t } from 'testcafe';

export default class YourPage {
  constructor() {
    this.attachButton = Selector("button[aria-describedby='resume-allowable-file-types']");
    this.fileInput = Selector('input[type="file"]');
    this.attachButtonCL = Selector("button[aria-describedby='cover_letter-allowable-file-types']")
    this.fileInputCL = Selector('input[type="file"]').nth(1)
  }

  async uploadFile(filePath) {
    await t
      .setFilesToUpload(this.fileInput, filePath)
    }
  async uploadFileCoverLetter(filePath) {
    await t
      .setFilesToUpload(this.fileInputCL, filePath)
    }
  }
  
