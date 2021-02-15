'use strict';
let hoursOpen = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];
let allCookieShops = [];
const container = document.getElementById('stores');
const articleEl = document.createElement('article');
container.appendChild(articleEl);
const tableEl = document.createElement('table');
articleEl.appendChild(tableEl);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function Shop(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.numOfCustomers = 0;
  this.numOfCookies = 0;
  this.array = [];
  this.total = 0;
  allCookieShops.push(this);

}
Shop.prototype.getNumOfCustomers = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    this.numOfCustomers = randomNumber(this.min, this.max);
    this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
    this.array.push(this.numOfCookies);
    this.total = this.array[i] + this.total;
    //console.log(this.array[i]);
  }
};
Shop.prototype.renderHeader = function () {
  const trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  const tCellFirst = document.createElement('th');
  trEl.appendChild(tCellFirst);
  tCellFirst.textContent = 'Location';
  for (let i = 0; i < hoursOpen.length; i++) {
    let thEl = document.createElement('th');
    thEl.textContent = hoursOpen[i];
    trEl.appendChild(thEl);

  }
  const tCellLast = document.createElement('th');
  trEl.appendChild(tCellLast);
  tCellLast.textContent = 'Daily Location Total';

};
Shop.prototype.renderData = function () {
  const trEl = document.createElement('tr');
  //console.log(tableEl);
  tableEl.appendChild(trEl);
  trEl.textContent = this.name;
  for (let i = 0; i < this.array.length; i++) {
    const tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.array[i];
    //console.log(this.array[i]);
  }
  const tdTotalEl = document.createElement('td');
  trEl.appendChild(tdTotalEl);
  tdTotalEl.textContent = this.total;

};
Shop.prototype.renderFooter = function () {
  const trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  const tdCellFirstEl = document.createElement('th');
  trEl.appendChild(tdCellFirstEl);
  tdCellFirstEl.textContent = 'Hourly Totals';
  let grandTotal = 0;
  for (let i = 0; i < hoursOpen.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < allCookieShops.length; j++) {
      hourlyTotal += allCookieShops[j].array[i];
      grandTotal += allCookieShops[j].array[i];
    }
    const tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = hourlyTotal;
  }
  const tdGrandEl = document.createElement('td');
  trEl.appendChild(tdGrandEl);
  tdGrandEl.textContent = grandTotal;

};
const seattle = new Shop('Seattle', 23, 65, 6.3);
const tokyo = new Shop('Tokyo', 3, 24, 1.2);
const dubai = new Shop('Dubai', 11, 38, 3.7);
const paris = new Shop('Paris', 20, 38, 2.3);
const lima = new Shop('Lima', 2, 16, 4.6);

Shop.prototype.renderHeader();
seattle.getNumOfCustomers();
seattle.renderData();
tokyo.getNumOfCustomers();
tokyo.renderData();
dubai.getNumOfCustomers();
dubai.renderData();
paris.getNumOfCustomers();
paris.renderData();
lima.getNumOfCustomers();
lima.renderData();
Shop.prototype.renderFooter();



// lab06
// 'use strict';
// let hoursOpen = [
//   '6am: ',
//   '7am: ',
//   '8am: ',
//   '9am: ',
//   '10am: ',
//   '11am: ',
//   '12pm: ',
//   '1pm: ',
//   '2pm: ',
//   '3pm: ',
//   '4pm: ',
//   '5pm: ',
//   '6pm: ',
//   '7pm: ',
//   '8pm: ',
// ];
// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   numOfCustomers: 0,
//   numOfCookies: 0,
//   array: [],
//   total: 0,
//   getNumOfCustomers: function (min, max) {
//     for (let i = 0; i < hoursOpen.length; i++) {
//       this.numOfCustomers = randomNumber(min, max);
//       this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
//       this.array.push(this.numOfCookies);
//       this.total = this.array[i] + this.total;
//     }
//   },
//   render: function () {
//     const container = document.getElementById('stores');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for (let j = 0; j < hoursOpen.length; j++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
//     }
//     const totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.total + ' cookies ';
//   },
// };
// seattle.getNumOfCustomers(23,65);
// seattle.render();


// const tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   numOfCustomers: 0,
//   numOfCookies: 0,
//   array: [],
//   total: 0,
//   getNumOfCustomers: function (min, max) {
//     for (let i = 0; i < hoursOpen.length; i++) {
//       this.numOfCustomers = randomNumber(min, max);
//       this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
//       this.array.push(this.numOfCookies);
//       this.total = this.array[i] + this.total;
//     }
//   },
//   render: function () {
//     const container = document.getElementById('stores');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for (let j = 0; j < hoursOpen.length; j++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
//     }
//     const totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.total + ' cookies ';
//   },
// };
// tokyo.getNumOfCustomers(23,65);
// tokyo.render();




// const dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   numOfCustomers: 0,
//   numOfCookies: 0,
//   array: [],
//   total: 0,
//   getNumOfCustomers: function (min, max) {
//     for (let i = 0; i < hoursOpen.length; i++) {
//       this.numOfCustomers = randomNumber(min, max);
//       this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
//       this.array.push(this.numOfCookies);
//       this.total = this.array[i] + this.total;
//     }
//   },
//   render: function () {
//     const container = document.getElementById('stores');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for (let j = 0; j < hoursOpen.length; j++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
//     }
//     const totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.total + ' cookies ';
//   },
// };
// dubai.getNumOfCustomers(23,65);
// dubai.render();



// const paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   numOfCustomers: 0,
//   numOfCookies: 0,
//   array: [],
//   total: 0,
//   getNumOfCustomers: function (min, max) {
//     for (let i = 0; i < hoursOpen.length; i++) {
//       this.numOfCustomers = randomNumber(min, max);
//       this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
//       this.array.push(this.numOfCookies);
//       this.total = this.array[i] + this.total;
//     }
//   },
//   render: function () {
//     const container = document.getElementById('stores');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for (let j = 0; j < hoursOpen.length; j++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
//     }
//     const totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.total + ' cookies ';
//   },
// };
// paris.getNumOfCustomers(23,65);
// paris.render();



// const lima = {
//   name: 'Lima',
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   numOfCustomers: 0,
//   numOfCookies: 0,
//   array: [],
//   total: 0,
//   getNumOfCustomers: function (min, max) {
//     for (let i = 0; i < hoursOpen.length; i++) {
//       this.numOfCustomers = randomNumber(min, max);
//       this.numOfCookies = Math.floor(this.numOfCustomers * this.avg);
//       this.array.push(this.numOfCookies);
//       this.total = this.array[i] + this.total;
//     }
//   },
//   render: function () {
//     const container = document.getElementById('stores');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.name;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);

//     for (let j = 0; j < hoursOpen.length; j++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hoursOpen[j] + ' ' + this.array[j] + ' cookies ';
//     }
//     const totalLi = document.createElement('li');
//     ulEl.appendChild(totalLi);
//     totalLi.textContent = 'Total: ' + this.total + ' cookies ';
//   },
// };
// lima.getNumOfCustomers(23,65);
// lima.render();
