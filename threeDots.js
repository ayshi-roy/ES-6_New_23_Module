//puraton niyome 2 array add korar niyom
const ages = [12,34,56,34,67];
const ages2 = [34,67,89];
const ages3 = [37,87,99];
// const allAge = ages.concat(ages2).concat([8]).concat(ages3);

//new technic for joint three array(spread operator...)
const allAge = [...ages, ...ages2, ...ages3, 5];
console.log(allAge);

//another example
const business = 650;
const sochib = 780;
const minister = 450;
const takaPoisa = [650,780,140];
const maximum = Math.max(...takaPoisa);
console.log(maximum);