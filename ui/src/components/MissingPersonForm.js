import { useState } from "react";

function MissingPersonForm() {
  const defaultForm = {
    name: "",
    image: "",
    race: "",
    hairColor: "",
    eyesColor: "",
    ageNow: 0,
    height: 0,
    missingSince: "",
    missingFrom: "",
    familyAddress: "",
  };

  const [form, setForm] = useState(defaultForm);

  return (
    <div className="flex flex-wrap">
      <h3 className="p-2 text-lg w-full">Please fill out this form</h3>
      <div className="px-2 w-1/2">
        <input
          className="w-full col-6 border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="text"
          value={form.name}
          placeholder="Full Name"
          onChange={(event) => {
            setForm({ ...form, name: event.target.value });
          }}
        />
      </div>
      <div className="px-2 w-1/2">
        <input
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="text"
          placeholder="Missing At"
          value={form.missingFrom}
          onChange={(event) => {
            setForm({ ...form, missingFrom: event.target.value });
          }}
        />
      </div>
      <div className="px-2 w-full">
        <input
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="text"
          value={form.familyAddress}
          placeholder="Crypto Address"
          onChange={(event) => {
            setForm({ ...form, familyAddress: event.target.value });
          }}
        />
      </div>
      <div className="px-2 w-1/2 h-256">
        <input
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="text"
          value={form.image}
          placeholder="Image URL"
          onChange={(event) => {
            setForm({ ...form, image: event.target.value });
          }}
        />
      </div>
      <div className="px-2 w-1/2 h-256">
        {form.image ? (
          <img src={form.image} className="h-256" />
        ) : (
          <p className="p-2">Image preview will be here</p>
        )}
      </div>
      <div className="px-2 w-1/3">
        <select
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500 focus:border-violet-500"
          value={form.race}
          onChange={(event) => {
            setForm({ ...form, race: event.target.value });
          }}
        >
          <option value={null}>Select race</option>
          <option value="0">Hispanic</option>
          <option value="1">White</option>
          <option value="2">Asian</option>
          <option value="3">American Indian</option>
          <option value="4">African</option>
        </select>
      </div>
      <div className="px-2 w-1/3">
        <select
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500 focus:border-violet-500"
          value={form.hairColor}
          onChange={(event) => {
            setForm({ ...form, hairColor: event.target.value });
          }}
        >
          <option value={null}>Select hair color</option>
          <option value="0">Black</option>
          <option value="1">Brown</option>
          <option value="2">Dark Brown</option>
          <option value="3">Orange</option>
          <option value="4">Red</option>
          <option value="5">White</option>
          <option value="6">Blond</option>
          <option value="7">Grey</option>
        </select>
      </div>
      <div className="px-2 w-1/3">
        <select
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500 focus:border-violet-500"
          value={form.eyesColor}
          onChange={(event) => {
            setForm({ ...form, eyesColor: event.target.value });
          }}
        >
          <option value={null}>Select eyes color</option>
          <option value="0">Brown</option>
          <option value="1">Amber</option>
          <option value="2">Hazel</option>
          <option value="3">Green</option>
          <option value="4">Blue</option>
        </select>
      </div>
      <div className="px-2 w-1/3">
        <input
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="number"
          min="0"
          max="100"
          placeholder="Age"
          value={form.ageNow}
          onChange={(event) => {
            setForm({ ...form, ageNow: event.target.value });
          }}
        />
      </div>
      <div className="px-2 w-1/3">
        <input
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="text"
          value={form.height}
        />
      </div>
      <div className="px-2 w-1/3">
        <input
          className="w-full border border-gray-500 text-gray-500 p-2 my-2 rounded focus:outline-violet-500"
          type="number"
          value={form.missingSince || 2022}
          placeholder="Missing since (Year)"
          onChange={(event) => {
            setForm({ ...form, missingSince: event.target.value });
          }}
        />
      </div>
      <div className="w-full p-2">
        <button
          className="w-full border border-violet-500 text-violet-500 p-2 rounded  hover:bg-violet-500 hover:text-white hover:border-gray-500"
          type="submit"
        >
          Report
        </button>
      </div>
    </div>
  );
}

export default MissingPersonForm;
