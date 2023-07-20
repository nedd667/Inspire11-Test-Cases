
import { Selector } from 'testcafe';

export default class HealthcarePage {
  constructor() {
    this.healthcareArticles = Selector('.project_category-healthcare');
  }

  async getHealthcareCards() {
    const articleCount = await this.healthcareArticles.count;
    const titles = [];
    const tags = [];

    for (let i = 0; i < articleCount; i++) {
      const article = this.healthcareArticles.nth(i);
      const title = await article.find('h4.entry-title a').innerText;
      const tag = await article.find('p.post-meta a').innerText;

      titles.push(title);
      tags.push(tag);
    }

    return { titles, tags };
  }
}

