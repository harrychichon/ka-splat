import { ReactNode, useRef } from 'react';
import styles from './Modal.module.scss';

type ModalProps = {
	modalContent: ReactNode | string;
	optionalButton1: boolean;
	optionalButton1Text?: string;
	optionalButton2: boolean;
	optionalButton2Text?: string;
	openButtonText: string;
	closeButtonText: string;
	handleClick?: () => void;
};

const Modal = ({
	modalContent,
	optionalButton1,
	optionalButton1Text,
	optionalButton2,
	optionalButton2Text,
	openButtonText,
	closeButtonText,
	handleClick,
}: Readonly<ModalProps>) => {
	const dialogRef = useRef<HTMLDialogElement>(null);

	const openModal = () => {
		dialogRef.current?.showModal();
	};

	const closeModal = () => {
		dialogRef.current?.close();
	};

	return (
		<>
			<dialog
				className={styles.Modal}
				ref={dialogRef}>
				<div>
					<div className='ContentContainer'>{modalContent}</div>
					<button
						className={styles.CloseModalBtn}
						id='close-button'
						onClick={closeModal}>
						{closeButtonText}
					</button>
					{optionalButton1 && (
						<button
							className={styles.OptBtn1}
							id='opt-btn-1'
							onClick={handleClick}>
							{optionalButton1Text}
						</button>
					)}
					{optionalButton2 && (
						<button
							className={styles.OptBtn2}
							id='opt-btn-2'
							onClick={handleClick}>
							{optionalButton2Text}
						</button>
					)}
				</div>
			</dialog>
			<button
				className={styles.OpenModalBtn}
				id='open-modal-button'
				onClick={openModal}>
				{openButtonText}
			</button>
		</>
	);
};

export default Modal;
