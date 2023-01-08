import { useState } from 'react';
import './App.css';
import Menu from './Menu/Menu';

function App() {
	const [menuActive, setMenuActive] = useState(false)
	const items = [
		{ value: 'Home', href: '/home' },
		{ value: 'Store', href: '/store' },
		{ value: 'About us', href: '/about us' },
		{ value: 'Settings', href: '/settings' },
	]

	return (
		<div>
			<nav>
				<div className='burger-btn' onClick={() => setMenuActive(prev => !prev)}>
					<span></span>
				</div>
			</nav>
			<Menu active={menuActive} setActive={setMenuActive} header={'Menu'} items={items} />
		</div>
	);
}

export default App;
