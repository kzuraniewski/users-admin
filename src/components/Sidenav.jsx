import React from 'react';

const Sidenav = () => {
	return (
		<div className='sidenav'>
			<a href='#' className='sidenav__link'>
				Użytkownicy
			</a>
			<a href='#' className='sidenav__link'>
				Dodaj
			</a>

			<div className='sidenav__divider' />

			<a href='#' className='sidenav__link'>
				Konto
			</a>
		</div>
	);
};

export default Sidenav;
