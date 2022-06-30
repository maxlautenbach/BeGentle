export default function Checkout() {
  return (
    <form action="http://localhost:3000/api/checkout" method="POST">
      <button type="submit">Checkout</button>
    </form>
  )
}
