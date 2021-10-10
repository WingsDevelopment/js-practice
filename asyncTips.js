const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

// async function awesome(promise) {
// 	try {
// 		const data = await promise;
// 		return [data, null];
//     }
// 	catch (error) {
// 		console.error(error);
// 		return [null, error];
// 	}
// }
// const a = getFruit('pineapple');
// const b = getFruit('strawberry');

// //const smoothie = await Promise.all([a, b])
// //with e handling
// const badSmoothie = async() => {
//     try {

//         const a = getFruit('pineapple')
//         const b = getFruit('strawberry');
//         //konkurentno
//         const smoothie = await Promise.all([a, b])

//         throw 'broken!'

//         return smoothie;

//     } catch(err) {
//         console.log(err)
//         // return `😬 We are going to be fine...`
//         throw `💩 It's broken!`
//     }
// }

//konkuretno sve 
//for await (const a of arrray) {log(a)}

//bundlephobia - npm package velicina i brzina
//run js in file with quokka.js -> start current file
//https://quokkajs.com/ - dok kucas da ti pokazuje console.log

const asyncWhile = () => {
    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })
}
// log('🥪 Synchronous 1');
// asyncWhile().then((r) => log(r))
// log('🥪 Synchronous 2');

function handleRejectedA(e) {
    log('rej')
    log(e);
}
function handleResolvedA(e) {
    log('res')
    log(e);
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ d: 'f1oo'});
      }, 500);
      setTimeout(() => {
        reject({ d: 'foo'});
      }, 400);
  });
  
log('🥪 Synchronous 1');
  myPromise
    .then(handleResolvedA, handleRejectedA);
log('🥪 Synchronous 2');


asd = 50;
var asd = 30;
log(asd);