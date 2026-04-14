import styles from './ItemsList.module.css'

type Props = {
	items: Array<string>,
	title: string
}

export const ItemsList = ({items, title}: Props) => {
	return (
		<>
			<h3 className={styles.itemTitle}>{title}</h3>
			<ul className={styles.list}>
				{items.map((item, index) => {
					return <li key={index} className={styles.item}>{item}</li>
				})}
			</ul>
		</>
	)
}
