import React, { useState, ChangeEvent } from "react";

// Define the shape of the profile object
interface ProfileState {
  name: string;
  age: string;
}

const Profile=()=> {
  const [profile, setProfile] = useState<ProfileState>({ name: "", age: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Profile</h2>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="text"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </div>
      </form>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
}

export default Profile;
