import genRandomColor from "../../utils/genRandomColor.ts";

export default function Die({
	val,
	color = genRandomColor(),
}: { val: number; color?: string }) {
	return (
		<li
			className=" border border-md text-white inline-block w-12 h-12  p-2 text-center font-bold text-md"
			style={{ backgroundColor: `${color}` }}
		>
			{val}
		</li>
	);
}
