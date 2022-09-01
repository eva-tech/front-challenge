import "./Button.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "eva-button--primary"
    : "eva-button--secondary";
  return (
    <button
      type="button"
      className={["eva-button", `eva-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
