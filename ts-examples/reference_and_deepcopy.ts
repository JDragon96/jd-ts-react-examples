const array = [1,2,3,4,5];

// array reference
// 위 array와 nextArrayBad는 동일한 객체이다.
const nextArrayBad = array;
nextArrayBad[0] = 100;
console.log("array : ", array);

// deepcopy
// nextArrayGood 객체와 array 객체는 다른 객체
const nextArrayGood = [...array];
nextArrayGood[0] = 0
console.log("array : ", array);

const object = {
	foo: 'bar',
	value: 1
};

const nextObjectBad = object;
nextObjectBad.value = 100;
console.log("object value : ", object.value);

const nextObjectGood = {
	...object,
	value: 1
};
console.log("object value : ", object.value);