import clsx from 'clsx'
import styles from './ColorButton.module.css'

type Props = {
	name: string,
	bcgColor: string
}

export const Button = ({name, bcgColor} : Props) => {

	const btnClass = clsx ({
		[styles.btn]: true,
		[styles[bcgColor]]: true,
	})

	return (
		<button className={btnClass}>{name}</button>
	)
}
