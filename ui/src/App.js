import { useState } from "react";

function App() {
  const filters = [
    "gender",
    "age",
    "race",
    "hair",
    "height",
    "weight",
    "last-seen",
    "lost-at",
  ];
  const people = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    },
    {
      url: "https://imagenes.elpais.com/resizer/o-OwmbBDYpFmXsEKLTzsHEa2g8A=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/T2RDY2BILMYULRL2CFG7VCH2AA.jpg",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    },
    {
      url: "https://imagenes.elpais.com/resizer/o-OwmbBDYpFmXsEKLTzsHEa2g8A=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/T2RDY2BILMYULRL2CFG7VCH2AA.jpg",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    },
    {
      url: "https://imagenes.elpais.com/resizer/o-OwmbBDYpFmXsEKLTzsHEa2g8A=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/T2RDY2BILMYULRL2CFG7VCH2AA.jpg",
    },
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg",
    },
    {
      url: "https://imagenes.elpais.com/resizer/o-OwmbBDYpFmXsEKLTzsHEa2g8A=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/T2RDY2BILMYULRL2CFG7VCH2AA.jpg",
    },
  ];

  const [appliedFilters, setAppliedFilters] = useState([]);

  function connectWallet() {
    console.log("conect wallet");
  }

  return (
    <div>
      <header className="flex items-center bg-purple-600 text-white p-4">
        <div className="w-1/4 flex items-center">
          <img src="./logo.png" />
          <h1 className="text-xl">EternalHope</h1>
        </div>
        <div className="w-2/4 flex items-center">
          <input
            className="focus:outline-none w-full p-2 placeholder:text-white rounded bg-transparent border-2 border-white"
            placeholder="Search"
          />
        </div>
        <div className="w-1/4 flex items-center justify-end">
          <button className="p-2 border-2 border-white rounded hover:shadow-xl">
            Connect wallet
          </button>
        </div>
      </header>
      <main>
        <section className="p-4">
          <div>
            <button className="rounded border-2 border-violet-500 text-violet-500 p-2 hover:bg-violet-500 hover:text-white hover:border-gray-500">
              + Report a missing person
            </button>
          </div>
        </section>
        <section className="p-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Help us find this people
            </h2>
          </div>
          <div className="flex flex-wrap items-center">
            {filters.map((filter, filterIndex) => (
              <div className="w-1/6 p-2">
                <input
                  className="border border-gray-500 rounded p-2 focus:outline-violet-500"
                  placeholder={`filter${filterIndex}`}
                ></input>
              </div>
            ))}
            <div className="w-1/6 p-2">
              <button
                type="submit"
                className="text-violet-500 border-2 border-violet-500 p-2 rounded hover:bg-violet-500 hover:text-white hover:border-gray-500"
                onClick={setAppliedFilters}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {people.map((person, personIndex) => (
              <div className="w-1/6 p-2" key={personIndex}>
                <div className="border p-4 border-gray-500 rounded shadow-xl">
                  <div>
                    <img
                      className="min-w-full h-256 rounded"
                      src={person.url}
                    />
                  </div>
                  <h3 className="my-1 font-bold">Person Name - 18 years</h3>
                  <div>
                    <ul>
                      <li>Last seen: 02-02-2022</li>
                      <li>Height: 1.80m</li>
                      <li>Race: Caucasian</li>
                      <li>Hair color: Black</li>
                      <li>Nationality: Russian</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="p-4 bg-violet-500 text-white">
        <span>EternalHope by&nbsp;</span>
        <span>
          <a className="underline" href="#" target="_blank">
            DFH
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
