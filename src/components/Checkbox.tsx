import React, { useState } from 'react';
import Icon from './Icon';

interface Props {
	type?: 'CHECKED' | 'TOGGLE';
	onChange?: (isChecked: boolean) => void;
	disabled?: boolean;
	checked?: boolean;
}

const Checkbox = ({ type = 'CHECKED', disabled, checked, onChange }: Props) => {
	const [isChecked, setIsChecked] = useState(checked);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setIsChecked(isChecked);
		if (onChange) onChange(isChecked);
	};

	return (
		<div className={`checkbox-container relative flex items-center justify-center w-6 h-6 ${disabled ? 'text-powderBlue' : 'text-blue'}`}>
			<input
				className={`opacity-0 absolute top-0 right-0 w-full h-full z-1 ${disabled ? '' : 'cursor-pointer'}`}
				type="checkbox"
				disabled={disabled}
				onChange={(e) => handleChange(e)}
			/>
			{type === 'CHECKED' ? (
				<Icon
					icon={isChecked ? 'check_box' : 'check_box_outline_blank'}
					color="text-inherit"
					size="text-xl"
				/>
			) : (
				<Icon
					icon={isChecked ? 'toggle_on' : 'toggle_off outlined'}
					color="text-inherit"
					size="text-2xl"
				/>
			)}
		</div>
	);
};

export default Checkbox;
