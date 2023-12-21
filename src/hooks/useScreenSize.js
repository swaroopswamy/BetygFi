"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState({});

	useEffect(() => {
		const updateDimension = () => {
			setScreenSize({
				width: window?.innerWidth,
				height: window?.innerHeight
			});
		};
		window && window.addEventListener('resize', updateDimension);


		return (() => {
			window && window.removeEventListener('resize', updateDimension);
		});
	}, []);
	return screenSize;
};

export default useScreenSize;