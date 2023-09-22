import { ReactNode } from 'react';
import Button from './Button';

interface Props {
	title: string;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ title, onClose, children }: Props) => {
	return (
		<div className="backdrop fixed w-full h-full top-0 right-0 bg-[#000b] flex  items-center justify-center">
			<div className="modal-segment card flex flex-col items-center justify-center gap-5 p-5">
				<div className="title-close-box flex items-center justify-between w-full">
					<h3 className="title text-xl text-delftBlue font-bold">{title}</h3>
					<Button type='icon' text='close' onClick={onClose} color='red' />
				</div>
				<div className="modal-container">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
