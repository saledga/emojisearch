import { useState } from "react"

export default function Form({ setValueEmoji }) {
  const [value, setValue] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    setValueEmoji(value);
    console.log(value);
  }

  return (
    <div>
      <section className="form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="some emoji word..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
        </form>
      </section>
    </div>
  );
}
