'use strict';
let hoursOpen = [
  '6am: ',
  '7am: ',
  '8am: ',
  '9am: ',
  '10am: ',
  '11am: ',
  '12pm: ',
  '1pm: ',
  '2pm: ',
  '3pm: ',
  '4pm: ',
  '5pm: ',
  '6pm: ',
  '7pm: ',
  '8pm: ',
];
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  numOfCustomers: 0,
  numOfCookies: 0,
  array: [],
  total: 0,
  getNumOfCustomers: function (min, max) {
    for (let i = 0; i < hoursOpen.length; i++) {
      this.numOfCustomers = randomNumber(min, max);
      this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
      this.array.push(this.numOfCookies);
      this.total = this.array[i] + this.total;
    }
  },
  render: function () {
    const container = document.getElementById('stores');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let j = 0; j < hoursOpen.length; j++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
    }
    const totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = 'Total: ' + this.total + ' cookies ';
  },
};
seattle.getNumOfCustomers(23,65);
seattle.render();


const tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  numOfCustomers: 0,
  numOfCookies: 0,
  array: [],
  total: 0,
  getNumOfCustomers: function (min, max) {
    for (let i = 0; i < hoursOpen.length; i++) {
      this.numOfCustomers = randomNumber(min, max);
      this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
      this.array.push(this.numOfCookies);
      this.total = this.array[i] + this.total;
    }
  },
  render: function () {
    const container = document.getElementById('stores');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let j = 0; j < hoursOpen.length; j++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
    }
    const totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = 'Total: ' + this.total + ' cookies ';
  },
};
tokyo.getNumOfCustomers(23,65);
tokyo.render();




const dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  numOfCustomers: 0,
  numOfCookies: 0,
  array: [],
  total: 0,
  getNumOfCustomers: function (min, max) {
    for (let i = 0; i < hoursOpen.length; i++) {
      this.numOfCustomers = randomNumber(min, max);
      this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
      this.array.push(this.numOfCookies);
      this.total = this.array[i] + this.total;
    }
  },
  render: function () {
    const container = document.getElementById('stores');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let j = 0; j < hoursOpen.length; j++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
    }
    const totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = 'Total: ' + this.total + ' cookies ';
  },
};
dubai.getNumOfCustomers(23,65);
dubai.render();



const paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  numOfCustomers: 0,
  numOfCookies: 0,
  array: [],
  total: 0,
  getNumOfCustomers: function (min, max) {
    for (let i = 0; i < hoursOpen.length; i++) {
      this.numOfCustomers = randomNumber(min, max);
      this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
      this.array.push(this.numOfCookies);
      this.total = this.array[i] + this.total;
    }
  },
  render: function () {
    const container = document.getElementById('stores');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let j = 0; j < hoursOpen.length; j++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
    }
    const totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = 'Total: ' + this.total + ' cookies ';
  },
};
paris.getNumOfCustomers(23,65);
paris.render();



const lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  numOfCustomers: 0,
  numOfCookies: 0,
  array: [],
  total: 0,
  getNumOfCustomers: function (min, max) {
    for (let i = 0; i < hoursOpen.length; i++) {
      this.numOfCustomers = randomNumber(min, max);
      this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
      this.array.push(this.numOfCookies);
      this.total = this.array[i] + this.total;
    }
  },
  render: function () {
    const container = document.getElementById('stores');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h1El = document.createElement('h1');
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);

    for (let j = 0; j < hoursOpen.length; j++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
    }
    const totalLi = document.createElement('li');
    ulEl.appendChild(totalLi);
    totalLi.textContent = 'Total: ' + this.total + ' cookies ';
  },
};
lima.getNumOfCustomers(23,65);
lima.render();
