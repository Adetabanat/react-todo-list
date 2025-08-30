import { useState } from "react"

export function NewTodoForm({ onSubmit }) {   // ✅ corrected name
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem.trim() === "") return

    onSubmit(newItem)
    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new">
      <div>
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
          autoFocus
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
