import randomNumGen from "./randomNumGen";
function dice6() {
	return randomNumGen(6);
}
function getRolls(n: number) {
	return Array.from({ length: n }, () => dice6());
}
function sum(numbers: number[]) {
	return numbers.reduce((prev: number, current: number) => prev + current, 0);
}
export { dice6, getRolls, sum };
