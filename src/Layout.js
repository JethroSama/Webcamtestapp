import React, { useState, useEffect } from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { VideoCameraOutlined, AudioOutlined } from '@ant-design/icons';
import { useLocation, Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = AntdLayout;

const Layout = ({ children }) => {
	const location = useLocation();
	console.log(location);
	const [collapsed, setCollapsed] = useState(false);
	useEffect(() => {
		window.onresize = (e) => {
			const currentWindowWidth = e.currentTarget.innerWidth;
			if (currentWindowWidth < 768) {
				setCollapsed(true);
			} else {
				setCollapsed(false);
			}
		};
	}, []);
	return (
		<AntdLayout style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(c) => setCollapsed(c)}
			>
				<div className='logo' />
				<Menu
					theme='dark'
					defaultSelectedKeys={[location.pathname === '/' ? '1' : '2']}
					mode='inline'
				>
					<Menu.Item key='1' icon={<VideoCameraOutlined />}>
						<Link to='/'>Webcam test</Link>
					</Menu.Item>
					<Menu.Item key='2' icon={<AudioOutlined />}>
						<Link to='/mictest'>Mic test</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<AntdLayout className='site-layout'>
				<Header className='site-layout-background' style={{ height: 'auto' }}>
					<h1 className='display-2 text-center text-white mb-1'>Webcam Test</h1>
				</Header>
				<Content style={{ margin: '0 16px' }}>{children}</Content>
				<Footer style={{ textAlign: 'center' }}>
					{/* Ant Design ©2018 Created by Ant UED
					 */}{' '}
					footer
				</Footer>
			</AntdLayout>
		</AntdLayout>
	);
};

export default Layout;
