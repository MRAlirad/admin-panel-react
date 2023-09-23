import { ReactNode } from 'react';
import Button from './Button';

interface Props {
	title: string;
	onClose: () => void;
	children: ReactNode;
}

const Modal = ({ title, onClose, children }: Props) => {
	return (
		<div className="backdrop fixed top-0 right-0 w-full h-full flex items-center justify-center bg-[#000b]">
			<div className="modal-segment card grid grid-rows-[max-content_1fr] gap-5 w-max max-w-[95vw] h-max max-h-[95vh] p-5">
				<div className="title-close-box flex items-center justify-between w-full">
					<h3 className="title text-xl text-delftBlue font-bold">{title}</h3>
					<Button
						type="icon"
						text="close"
						onClick={onClose}
						color="red"
					/>
				</div>
				<div className="modal-container overflow-y-auto overflow-x-hidden">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
