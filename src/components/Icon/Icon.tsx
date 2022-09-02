import React from "react";

export enum IconCatalog {
	search = "M11 6a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1112.606 4.192l3.101 3.1a1 1 0 01-1.414 1.415l-3.1-3.1A7 7 0 014 11z",
	trash = "M9 5a1 1 0 011-1h4a1 1 0 011 1v2h3a1 1 0 110 2v10a1 1 0 01-1 1H7a1 1 0 01-1-1V9a1 1 0 010-2h3V5zm2 2h2V6h-2v1zM8 9v9h8V9H8zm2 2a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4 0a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1z",
	upload = "M11.293 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L13 7.414V15a1 1 0 1 1-2 0V7.414L9.707 8.707a1 1 0 0 1-1.414-1.414l3-3ZM6 19a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z",
	zoomIn = "M11 6a5 5 0 100 10 5 5 0 000-10zm-7 5a7 7 0 1112.606 4.192l3.101 3.1a1 1 0 01-1.414 1.415l-3.1-3.1A7 7 0 014 11zm7-3a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H9a1 1 0 110-2h1V9a1 1 0 011-1z",
	join = "M17.7001 19.7C18.0901 19.31 18.0901 18.68 17.7001 18.29L15.0001 15.59L13.5901 17L16.2901 19.7C16.6801 20.09 17.3201 20.09 17.7001 19.7ZM8.71006 7.99999H11.0001V13.59L6.29006 18.29C5.90006 18.68 5.90006 19.31 6.29006 19.7C6.68006 20.09 7.31006 20.09 7.70006 19.7L12.4101 15C12.7901 14.62 13.0001 14.12 13.0001 13.59V7.99999H15.2901C15.7401 7.99999 15.9601 7.45999 15.6401 7.14999L12.3501 3.85999C12.1501 3.65999 11.8401 3.65999 11.6401 3.85999L8.35006 7.14999C8.04006 7.45999 8.26006 7.99999 8.71006 7.99999V7.99999Z",
}

export interface IconProps {
	/**
	 * Sets the width of the Icon
	 */
	width?: string;

	/**
	 * Sets the width of the Icon
	 */
	height?: string;

	/**
	 * The icon to display
	 */
	icon: IconCatalog;

	/**
	 * Specify an optional className to be added to the component.
	 */
	className?: string;

	/**
	 * The callback to get notified when the icon was clicked.
	 */
	onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

/**
 * The Icons catalog
 * @author Sergio Ruiz Davila<sergioruizdavila@gmail.com>
 * Created at 2022-05-24
 */
export const Icon = ({
	width = "24px",
	height = "24px",
	icon = IconCatalog.zoomIn,
	className,
	onClick,
}: IconProps) => {
	return (
		<svg
			data-testid="Icon"
			className={className}
			width={width}
			height={height}
			fill="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			focusable="false"
			aria-hidden="true"
			onClick={onClick}
		>
			<path fillRule="evenodd" clipRule="evenodd" d={icon} />
		</svg>
	);
};
