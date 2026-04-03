import styles from './Tag.module.css'

type Props = {
	title: string
}

export const Tag = ({title}: Props) => {
	return (
		<div className={styles.tag}>{title}</div>
	)
}
