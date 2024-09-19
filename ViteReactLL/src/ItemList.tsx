
import './style.css'
const ItemList = () => {
    const array:string[] = ["item1","item2","item3"]
  return (
    <ul className='lista'>
     {array.map(item => (
        <li>{item}</li>
     ))}
    </ul>
  )
}

export default ItemList