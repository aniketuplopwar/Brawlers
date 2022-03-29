export const BrawlerForm = () => {
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </li>
        <li>
          <label htmlFor="type">Type:</label>
          <input type="text" id="type" name="type" />
        </li>
      </ul>
    </form>
  )
}
