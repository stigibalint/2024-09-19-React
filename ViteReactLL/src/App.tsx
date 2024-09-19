import WelcomeMessage from "./WelcomeMessage";
import ItemList from "./ItemList";
import StyledBox from "./StyledBox";
import Product from "./Product";
import ShoppingList from "./ShoppingList";

const termekek = [
  {
    Nev: "ssajt",
    Mennyiseg: 3,
  },
  {
    Nev: "ssajt2",
    Mennyiseg: 2,
  },
  {
    Nev: "ssajt3",
    Mennyiseg: 5,
  },
]

const App = () => {
  return (
    <>
      <WelcomeMessage />
      <ItemList />
      <StyledBox />
      <Product />
      <ShoppingList items={termekek} />
    </>
  )
}

export default App;
