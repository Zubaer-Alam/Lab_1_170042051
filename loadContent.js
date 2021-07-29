const fs = require('fs');

const aboutPage = fs.readFileSync('./HTML/about.html', 'utf-8', 'r');
const blogPage = fs.readFileSync('./HTML/blog.html', 'utf-8', 'r');
const contactPage = fs.readFileSync('./HTML/contact.html', 'utf-8', 'r');

const indexPage = fs.readFileSync('./HTML/index.html', 'utf-8', 'r');
const pricingPage = fs.readFileSync('./HTML/pricing.html', 'utf-8', 'r');

const servicesPage = fs.readFileSync('./HTML/services.html', 'utf-8', 'r');

const workPage = fs.readFileSync('./HTML/work.html', 'utf-8', 'r');

module.exports = {
  aboutPage,
  blogPage,
  contactPage,
  indexPage,
  pricingPage,
  servicesPage,
  workPage,
};
