import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Perks from "../components/Perks";
function PlacesPage() {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [exteaInfo, setExteaInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [macGuest, setMacGuest] = useState(1);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}

      {action === "new" && (
        <div>
          <form>
            {preInput(
              "Title",
              "title for your place. should be short and catchy as in advertisement"
            )}

            <input
              type="text"
              placeholder="title, for example: My lovely apartment"
              value={}
            />

            {preInput("Address", "Address to this place")}
            <input type="text" placeholder="address" />

            {preInput("Photos", "more = better")}
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link ....jpg"} />
              <button className="bg-gray-200 px-4 rounded-2xl">
                {" "}
                Add&nspb;Photo
              </button>
            </div>
            <div className="mt-2 grid grid-col-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex gap-1 justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload from your device
              </button>
            </div>

            {preInput("Description", "description of place")}
            <textarea className="w-full border rounded" />

            {preInput("Perks", "select all the perks of your place")}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {preInput("Extra info", "house rules, etc")}
            <textarea className="w-full " />

            {preInput(
              "Check in&out times, max guest",
              "add check in and out times, remember to have some time window for cleaning the room"
            )}
            <div className="grid gap-2 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-2">Check in time</h3>
                <input type="text" placeholder="14:00" />
              </div>
              <div>
                <h3 className="mt-2 -mb-2">checkout times</h3>
                <input type="text" />
              </div>
              <div>
                <h3 className="mt-2 -mb-2">Max number of guests</h3>
                <input type="text" />
              </div>
            </div>

            <button className="primary my-4 ">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PlacesPage;
