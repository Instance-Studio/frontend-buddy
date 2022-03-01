import useStore from "../../store";

interface Props {
  id: string;
  text: string;
  isChecked: boolean;
}

function ListItem({ id, text, isChecked }: Props) {
  const updateItemIsChecked = useStore((state) => state.updateItemIsChecked);

  const onClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    console.log("click");
    updateItemIsChecked(id);
  };

  return (
    <li key={id} className="mb-2">
      <label className="flex items-center text-lg">
        <input
          type="checkbox"
          className="mr-2 rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-slate-600 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
          checked={isChecked}
          readOnly
          onClick={onClick}
          id={id}
        />
        <span className={isChecked ? "text-slate-600" : ""}>{text}</span>
      </label>
    </li>
  );
}

export default ListItem;
