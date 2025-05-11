'use client';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Readonly<ModalProps>) => {
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handler);
		return () => document.removeEventListener('keydown', handler);
	}, [onClose]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<div
			className={styles.backdrop}
			onClick={onClose}>
			<div
				className={styles.modal}
				onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
			>
				<button
					className={styles.closeBtn}
					onClick={onClose}>
					×
				</button>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
