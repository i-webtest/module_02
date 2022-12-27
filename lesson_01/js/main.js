'use strict';

const ads = document.querySelector('.ads');
const items = document.querySelector('.items');
const item = items.querySelectorAll('.item');
const content = items.querySelectorAll('.content');
const itemTitle = items.querySelectorAll('.item__title');
const propsItem = items.querySelectorAll('.props__item');
const propsList = items.querySelectorAll('.props__list');

ads.remove();

item[0].before(item[1]);
item[1].after(item[2]);
item[2].after(item[3]);

itemTitle[4].replaceWith(itemTitle[1]);
propsList[4].before(itemTitle[4]);
propsList[2].before(itemTitle[3]);

itemTitle[2].textContent = 'This и прототипы объектов';

propsItem[2].after(propsItem[14]);
propsItem[19].after(propsItem[43]);
propsItem[43].after(propsItem[44]);

propsList[4].replaceWith(propsList[3]);
itemTitle[2].after(propsList[4]);
