import React, {useState, useEffect} from 'react';

import AppMenu from './AppMenu';
import Logo from './Logo';

const Navbar = () => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);
		window.addEventListener('resize', handleResize);

		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => setActiveMenu(screenSize >= 768), [screenSize]);

	return (
		<div className="navbar">
			<div className="nav-container">
				<Logo setMenu={setActiveMenu} activeMenu={activeMenu} />
				<AppMenu activeMenu={activeMenu} />
			</div>
		</div>
	);
};

export default Navbar;
