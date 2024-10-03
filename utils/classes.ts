// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const clsx = (...classes: any[]) => {
	return classes?.filter(Boolean)?.join(' ') ?? '';
};

// template literal tag function # only for regex to pickup that string is tailwind classes. no need to change the string
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const tw = (strings: TemplateStringsArray, ...args: any[]) => {
	return clsx(strings.map((str, i) => [str, args[i]].filter(Boolean).join(' ')));
};
