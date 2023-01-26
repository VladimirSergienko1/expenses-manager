import "./NewItem.css";
import ItemForm from "./ItemForm";
import { useState } from "react";
const NewItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveItemDataHandler = (enteredItemData) => {
    const itemData = {
      ...enteredItemData,
      id: Math.random().toString(),
    };
    props.onAddItem(itemData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-item">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Item</button>
      )}
      {isEditing && (
        <ItemForm
          onSaveItemData={saveItemDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewItem;
