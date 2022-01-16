import React from 'react';

import AppMenu from './AppMenu';
import Logo from './Logo';

const Navbar = () => (
	<div className="navbar">
		<div className="nav-container">
			<Logo />
			<AppMenu />
		</div>
	</div>
);

export default Navbar;
