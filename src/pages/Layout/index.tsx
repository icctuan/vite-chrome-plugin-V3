// 布局组件
// import { Divider, Radio, RadioChangeEvent } from "antd";
import { FC, useState } from 'react'
import { Outlet } from 'react-router'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'

const Layout: FC<any> = () => {
	const [active, setActive] = useState<'tool' | 'manage' | 'set'>('tool')

	// const navigate = useNavigate();

	// function onRouteChange(e: RadioChangeEvent) {
	//   const value = e.target.value;
	//   setActive(value);
	//   navigate(value);
	// }

	return (
		<div>
			<div>
				<button>工具</button>
				<button>管理</button>
				<button>设置</button>
			</div>
			{/* <Radio.Group value={active} onChange={onRouteChange}>
          <Radio.Button value="tool">工具</Radio.Button>
          <Radio.Button value="manage">管理</Radio.Button>
          <Radio.Button value="set">设置</Radio.Button>
        </Radio.Group> */}
			{/* <Divider /> */}
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
