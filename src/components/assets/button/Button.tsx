import clsx from 'clsx'
import styles from './Button.module.css'

type Props = {
	name: string,

}

export const Button = ({name} : Props) => {

	const btnClass = clsx ({
		[styles.btn]: true,
	})

	return (
		<button className={btnClass}>{name}</button>
	)
}