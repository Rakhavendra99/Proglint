const animals=['pigs','goats','sheep'];
console.log(animals);
const add = animals.push('cows');
console.log(animals);
animals.push('cats','dogs');
console.log(animals);
console.log(add);

let vegetable =['parsnip','potato'];
console.log(vegetable);
vegetable.push('tomato');
let moreVegs=['celery','beetroot'];
Array.prototype.push.apply(vegetable,moreVegs);
console.log(vegetable);