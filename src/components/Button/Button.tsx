import React, { ReactNode, ButtonHTMLAttributes } from "react";
import cn from "classnames";
import "./Button.css";

export enum ButtonSize {
	sm = "sm",
	md = "md",
	lg = "lg",
}

export enum ButtonVariant {
	primary = "primary",
	secondary = "secondary",
}

export enum HtmlType {
	button = "button",
	reset = "reset",
	submit = "submit",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Changes the size of the button, giving it more or less padding
	 */
	size?: ButtonSize;

	/**
	 * The shape of the component. It determines the importance in the hierarchy, for example, the contained button commands the most attention
	 */
	variant?: ButtonVariant;

	/**
	 * Disables the button, disallowing user interaction.
	 */
	isDisabled?: boolean;

	/**
	 * Extends the button to 100% width.
	 */
	isFullWidth?: boolean;

	/**
	 * HTML type attribute of the button.
	 */
	htmlType?: HtmlType;

	/**
	 * Elements to display inside the Navbar.
	 */
	children?: ReactNode;
}

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 * @author Sergio Ruiz<sergioruizdavila@gmail.com>
 * Created at 2022-05-24
 */
export const Button = ({
	children,
	size = ButtonSize.md,
	isDisabled = false,
	isFullWidth = false,
	variant = ButtonVariant.secondary,
	htmlType = HtmlType.button,
	className,
	onClick,
	...restOfProps
}: ButtonProps) => {
	const classes = cn(className, "eva-button", {
		"eva-button--w-full": isFullWidth,
		[`eva-button--${variant}`]: true,
		[`eva-button--${size}`]: true,
	});

	/* Render JSX */
	return (
		<button
			className={classes}
			type={htmlType}
			disabled={isDisabled}
			onClick={onClick}
			{...restOfProps}
		>
			{children}
		</button>
	);
};
