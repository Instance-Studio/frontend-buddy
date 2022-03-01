interface Props {
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactChild;
}

function Button(props: Props) {
  let className =
    "py-2 px-6 bg-black text-white rounded-md border-2 border-black";

  if (props.isActive) {
    className += " bg-white text-black";
  }

  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
