import { FC } from 'react'
import { LINKS } from './sourceData'
import styles from './index.module.less'

const Tool: FC<any> = () => {
	return (
		<div className={styles.wrapper}>
			{LINKS.map((item, index) => (
				<a key={index} href={item.value} target="_blank" rel="noreferrer">
					{item.label}
				</a>
			))}
		</div>
	)
}

export default Tool
