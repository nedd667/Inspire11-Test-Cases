  import { Selector, ClientFunction } from 'testcafe';


  // Selector to find all articles with class 'project_category-healthcare' (tagged with 'healthcare')
  const healthcareArticles = Selector('.project_category-healthcare');

  // Extract the titles and tags of the healthcare articles
    const getTitleAndTag = ClientFunction((selector) => {
    const articles = document.querySelectorAll(selector);
    
    const titles = [];
    const tags = [];

    articles.forEach(article => {
      const title = article.querySelector('h4.entry-title a').innerText.trim();
      const tag = article.querySelector('p.post-meta a').innerText.trim();

      titles.push(title);
      tags.push(tag);
    });

    return { titles, tags };
  });

  const { titles, tags } = await getTitleAndTag('.project_category-healthcare');

  // Print the titles and tags in the desired format
  for (let i = 0; i < titles.length; i++) {
    console.log('TITLE:', titles[i]);
    console.log('TAG:', tags[i]);
  }