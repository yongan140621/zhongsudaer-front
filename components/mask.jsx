import { Transition } from '@headlessui/react'

export default function Mask(props) {
	const { className = '', visible, onClose } = props

	return (
		<Transition
			show={visible}
			className={`fixed left-0 top-0 bottom-0 right-0 bg-black/25 transform-gpu ${className}`}
			enter="transition-opacity duration-150"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			onClick={onClose}
		/>
	)
}
