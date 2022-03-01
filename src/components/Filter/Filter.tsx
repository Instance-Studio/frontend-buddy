import Button from "../Button/Button";
import useStore from "../../store";

function Filter() {
  const { setFilter, filter } = useStore((state) => ({
    filter: state.filter,
    setFilter: state.setFilter,
  }));

  const onLowClick = () => {
    setFilter("low");
  };

  const onMediumClick = () => {
    setFilter("medium");
  };

  const onHighClick = () => {
    setFilter("high");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-medium mb-4">Project Budget</h1>
      <div className="flex gap-6">
        <Button isActive={filter === "low"} onClick={onLowClick}>
          Low
        </Button>
        <Button isActive={filter === "medium"} onClick={onMediumClick}>
          Medium
        </Button>
        <Button isActive={filter === "high"} onClick={onHighClick}>
          High
        </Button>
      </div>
    </div>
  );
}

export default Filter;
