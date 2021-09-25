const puppeteer = require('puppeteer');
const { text } = require('cheerio/lib/api/manipulation');

async function makeScrap(imgpath = 'example.png',url = 'https://example.com') {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto(url);
  const Name = await page.evaluate(() =>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(1) > div > div.col-md-4.col-sm-6.col-xs-12 > p > b').innerText;
  })

  let Age = await page.evaluate(() =>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(1) > div > div.col-md-8.col-sm-6.col-xs-12 > p:nth-child(3)').innerText;
  })

  let agereg = /Birthday: /gi;
  let newAge = Age.replace(agereg,"");

  const gender = await page.evaluate(()=>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(1) > div > div.col-md-8.col-sm-6.col-xs-12 > p:nth-child(1) > b').innerText;
  })

  const street = await page.evaluate(() =>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(1) > div > div.col-md-8.col-sm-6.col-xs-12 > p:nth-child(4) > b').innerText;
  })

  const height = await page.evaluate(()=>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(3) > div:nth-child(4) > input').value;
  })

  let newHeight = height.replace(/^.*?\(/, '(');
  newHeight = newHeight.replace(/[\])}[{(]/g, '');

  let weight = await page.evaluate(()=>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(3) > div:nth-child(6) > input').value;
  })
  const email = await page.evaluate(() =>{
    return document.querySelector('body > div.container.main > div.col-md-9.col-sm-9.col-xs-12 > div.frame-1 > div:nth-child(3) > div:nth-child(2) > input').value;
  })




  let newWeight = weight.replace(/^.*pounds /, "");
  newWeight = newWeight.replace(/[\])}[{(]/g, '');
  const person = {
    Name : Name,
    Age : newAge,
    gender : gender,
    street : street,
    height : newHeight,
    weight: newWeight,
    email : email
  };
  await browser.close();
  return person;
}

module.exports = {
  makeScrap : makeScrap
  };