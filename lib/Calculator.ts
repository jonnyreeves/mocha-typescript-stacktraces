export default class Calculator {
	add(...values : number[]) {
		return values.reduce((v, total) => total + v);
	}
}