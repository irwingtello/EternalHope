import { useState } from "react";
import { createDatabase } from "./database";
import { useEffect } from "react";
import MissingPersonForm from "./components/MissingPersonForm";
import axios from "axios";
import keyBy from "lodash.keyby";

const Web3 = window.Web3;

function App() {
  useEffect(() => {
    const url = "https://deep-index.moralis.io/api/v2/nft";
    const address = "0x9D151D811Bdb2fD6ec73c8c7614cf71E68BC87B9";
    axios
      .get(`${url}/${address}`, {
        headers: {
          "X-Api-Key":
            "cqNMpvJJVMDNjgEwsGYKF9Pwg48cC7JMORTKETLySmo33JA6Sm2BY8FoxD8mP3Y9",
        },
        params: {
          chain: "polygon",
        },
      })
      .then((res) => {
        setPeople(formatData(res.data.result));
        console.log(people);
      });
    console.log(createDatabase());
  }, []);

  const [showForm, setShowForm] = useState(false);
  const filters = [
    // "name",
    // "race",
    // "hairColor",
    // "eyesColor",
    // "ageNow",
    // "height",
    // "missingFrom",
    // "missingSince",
    // "uri",
    // "familyAddress",
  ];

  const [people, setPeople] = useState([]);

  const [appliedFilters, setAppliedFilters] = useState([]);
  const [currentWalletAddress, setCurrentWalletAddress] = useState("");

  async function connectWallet() {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      const account = window.web3.eth.accounts;
      const walletAddress = account.givenProvider.selectedAddress;

      setCurrentWalletAddress(walletAddress);
    } else {
      console.log("No wallet");
    }
  }

  function formatData(arr) {
    return arr.map((item) => {
      const metadata = JSON.parse(item.metadata);
      metadata.attributes = keyBy(metadata.attributes, "trait_type");
      console.log(metadata);
      return {
        ...item,
        metadata,
        image: metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/"),
      };
    });
  }

  return (
    <div>
      <header className="flex items-center bg-purple-600 text-white p-4">
        <div className="w-1/4 flex items-center">
          <h1 className="text-xl">EthernalHope</h1>
        </div>
        <div className="w-2/4 flex items-center">
          <input
            className="w-3/4 p-2 placeholder:text-white rounded bg-transparent border-2 border-white hover:shadow-xl focus:outline-none focus:shadow-xl"
            placeholder="Search"
          />
        </div>
        <div className="w-1/4 flex items-center justify-end">
          {currentWalletAddress || (
            <button
              className="p-2 border-2 border-white rounded hover:shadow-xl"
              onClick={connectWallet}
            >
              Connect wallet
            </button>
          )}
        </div>
      </header>
      <main>
        <section className="p-4">
          <div>
            <button
              onClick={() => setShowForm(true)}
              className="rounded border-2 border-violet-500 text-violet-500 p-2 hover:bg-violet-500 hover:text-white hover:border-gray-500"
            >
              + Report a missing person
            </button>
            {showForm && (
              <button
                className="text-violet-500 ml-4"
                onClick={() => setShowForm(false)}
              >
                Close Form
              </button>
            )}
          </div>
          {showForm && <MissingPersonForm />}
        </section>
        <section className="p-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Help us find these people
            </h2>
          </div>
          <div className="flex flex-wrap items-center">
            {filters.map((filter, filterIndex) => (
              <div className="w-1/6 p-2" key={filterIndex}>
                <input
                  className="border border-gray-500 rounded p-2 focus:outline-violet-500"
                  placeholder={filter}
                ></input>
              </div>
            ))}
            <div className="w-1/6 p-2">
              {appliedFilters.length > 0 && (
                <button
                  type="submit"
                  className="text-violet-500 border-2 border-violet-500 p-2 rounded hover:bg-violet-500 hover:text-white hover:border-gray-500"
                  onClick={setAppliedFilters}
                >
                  Apply
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-wrap">
            {people.map((person, personIndex) => (
              <div className="w-1/6 p-2" key={personIndex}>
                <div className="border p-4 border-gray-500 rounded shadow-xl">
                  <div>
                    <img
                      className="min-w-full h-256 rounded"
                      src={person.image}
                    />
                  </div>
                  <h3 className="my-1 font-bold">
                    {person.metadata.name}
                    <br />
                    {person.metadata.attributes.ageNow.value} years
                  </h3>
                  <div>
                    <ul>
                      <li>
                        Last seen:{" "}
                        {person.metadata.attributes.missingSince.value} at{" "}
                        {person.metadata.attributes.missingFrom.value}
                      </li>
                      <li>Race: {person.metadata.attributes.race.value}</li>
                      <li>Height: {person.metadata.attributes.height.value}</li>
                      <li>
                        Hair color: {person.metadata.attributes.hairColor.value}
                      </li>
                      <li>
                        Eyes color: {person.metadata.attributes.eyesColor.value}
                      </li>
                      <li>
                        <p>Family Address:</p>
                        <p className="d-block truncate text-violet-500">
                          <a
                            target="_blank"
                            href={`https://polygonscan.com/address/${person.metadata.attributes.familyAddress.value}`}
                          >
                            {person.metadata.attributes.familyAddress.value}
                          </a>
                        </p>
                      </li>
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
