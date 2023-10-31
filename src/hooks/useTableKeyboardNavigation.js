"use client";
import { useState, useEffect } from "react";

function useTableKeyboardNavigation(data, numColumns) {
	const [focusedCell, setFocusedCell] = useState({ row: 0, col: 0 });

	const handleKeyDown = (event) => {
		const { key } = event;
		let newRow = focusedCell.row;
		let newCol = focusedCell.col;

		switch (key) {
			case "ArrowUp":
				newRow = Math.max(0, focusedCell.row - 1);
				break;
			case "ArrowDown":
				newRow = Math.min(data - 1, focusedCell.row + 1);
				break;
			case "ArrowLeft":
				newCol = Math.max(0, focusedCell.col - 1);
				break;
			case "ArrowRight":
				newCol = Math.min(numColumns - 1, focusedCell.col + 1);
				break;
			default:
				return;
		}

		setFocusedCell({ row: newRow, col: newCol });
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [focusedCell]);

	return { focusedCell };
}

export default useTableKeyboardNavigation;
