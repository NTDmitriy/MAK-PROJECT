import { IButton } from '@/interfaces/button.interface';
import { FC, PropsWithChildren } from 'react';



const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;