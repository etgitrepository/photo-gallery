import './RoundedButton.scss';

interface IRoundedButtonProps {
	children: React.ReactNode;
	selected?: boolean;
	onClick: () => void;
}

export const RoundedButton = ({
	children,
	selected,
	onClick,
}: IRoundedButtonProps) => {
	return (
		<button
			className={`rounded-button ${selected ? 'rounded-button--selected' : ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
