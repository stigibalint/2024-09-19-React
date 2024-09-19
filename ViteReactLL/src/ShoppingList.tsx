import ShoppingItem from "./ShoppingItem";

type shoppingListProps = {
  items: { Nev: string, Mennyiseg: number }[]
}

const ShoppingList = ({ items }: shoppingListProps) => {
  return (
    <div>
      {items.map((item, index) => (
        <ShoppingItem key={index} {...item} />
      ))}
    </div>
  )
}

export default ShoppingList;
