import randomNumGen from "./randomNumGen.ts";
const colorArray = ["green", "red", "blue", "purple", "orange", "indigo"];

const genRandomColor = () => {
	return colorArray[randomNumGen(colorArray.length - 1)];
};

export default genRandomColor;
