import { FC } from 'react'
import { LINKS } from './sourceData'
import styles from './index.module.less'

const Tool: FC<any> = () => {
	return (
		<div className={styles.wrapper}>
			{LINKS.map((item, index) => (
				<div className="wd-flex wd-items-center wd-justify-center" key={item.value}>
					{item.icon ? <img src={item.icon} className={styles.icon} /> : null}
					<a key={index} href={item.value} target="_blank" rel="noreferrer">
						{item.label}
					</a>
				</div>
			))}
		</div>
	)
}

export default Tool
