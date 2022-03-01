import useStore, { Item } from "../../store";

import ListItem from "../ListItem/ListItem";

interface Categories {
  [index: string]: Item[];
}

function List() {
  const { items, filter } = useStore((state) => ({
    items: state.items,
    filter: state.filter,
  }));

  let filteredItems = [];

  filteredItems = items.filter((item) => {
    if (filter === "high") return true;

    if (filter === "low") return item.projectBudget === "low";

    if (filter === "medium")
      return item.projectBudget === "low" || item.projectBudget === "medium";

    return false;
  });

  let categories: Categories = {};

  // Create category structure
  filteredItems.forEach((item) => {
    // Check if category key already exists in categories array
    if (categories[item.category]) {
      // If TRUE append item to end of categories selected array
      categories[item.category] = [...categories[item.category], item];
    } else {
      // If FALSE create category and add item as array
      categories[item.category] = [item];
    }
  });

  return (
    <div className="p-8">
      {Object.keys(categories).map((key) => (
        <div key={key} className="border-t-2 p-4">
          <h2 className="text-2xl font-medium mb-4 uppercase">{key}</h2>
          <ul className="">
            {categories[key].map((item: Item) => (
              <ListItem key={item.id} {...item}></ListItem>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default List;
