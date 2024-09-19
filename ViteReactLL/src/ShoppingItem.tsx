type shoppingItemProps = {
  Nev: string,
  Mennyiseg: number;
}

const ShoppingItem = (props: shoppingItemProps) => {
  return (
    <div>
      <h4>{props.Nev}</h4>
      <h4>{props.Mennyiseg}</h4>
    </div>
  )
}

export default ShoppingItem;
