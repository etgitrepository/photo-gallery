import './RoundedButton.scss';

interface IRoundedButtonProps {
	children: React.ReactNode;
	selected?: boolean;
	onClick: () => void;
	className?: string;
}

export const RoundedButton = ({
	children,
	selected,
	onClick,
	className,
}: IRoundedButtonProps) => {
	return (
		<button
			className={`rounded-button ${
				selected ? 'rounded-button--selected' : ''
			} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
