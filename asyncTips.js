async function awesome(promise) {
	try {
		const data = await promise;
		return [data, null];
    }
	catch (error) {
		console.error(error);
		return [null, error];
	}
}
const a = getFruit('pineapple');
const b = getFruit('strawberry');

const smoothie = await Promise.all([a, b])
//with e handling
const badSmoothie = async() => {
    try {

        const a = getFruit('pineapple')
        const b = getFruit('strawberry');
        //konkurentno
        const smoothie = await Promise.all([a, b])

        throw 'broken!'

        return smoothie;

    } catch(err) {
        console.log(err)
        // return `😬 We are going to be fine...`
        throw `💩 It's broken!`
    }
}

//konkuretno sve 
for await (const a of arrray) {log(a)}

//bundlephobia - npm package velicina i brzina
//run js in file with quokka.js -> start current file
//https://quokkajs.com/ - dok kucas da ti pokazuje console.log