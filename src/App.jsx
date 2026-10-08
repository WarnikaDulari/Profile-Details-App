import { useState } from "react";

function App() {

  const [profile, setProfile] = useState({
    name: "Warnika",
    email: "warnika.d@nsbm.ac.lk",
    points: 0
  });

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "Warnika",
    email: "warnika.d@nsbm.ac.lk",
    points: 0
  });

  const handleOpen = () => {
    setFormData(profile);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    setProfile({
      name: formData.name,
      email: formData.email,
      points: Number(formData.points)
    });

    setShowForm(false);
  };

  return (
    <div className="app">

      <div className="phone">

        <div className="header">

          <div className="status-bar">
            <span>12:30</span>

            <div className="status-icons">
              <span>⌁</span>
              <span>◖</span>
              <span>▮</span>
            </div>
          </div>

          <h2>My Profile</h2>

        </div>


        <div className="content">

          <div className="profile-image">

            <div className="hair"></div>

            <div className="face">

              <div className="glasses left"></div>
              <div className="glasses right"></div>

              <div className="bridge"></div>

              <div className="eye eye-left"></div>
              <div className="eye eye-right"></div>

              <div className="mouth"></div>

            </div>

            <div className="body"></div>

            <div className="check">
              ✓
            </div>

          </div>


          <div className="line"></div>


          <div className="detail">

            <h3>Name</h3>

            <p>
              {profile.name}
            </p>

          </div>


          <div className="detail">

            <h3>Email</h3>

            <p className="email">

              <span className="email-icon">
                ✉
              </span>

              {profile.email}

            </p>

          </div>


          <div className="detail">

            <h3>Points</h3>

            <p className="points">

              <span>
                ★
              </span>

              {profile.points}

            </p>

          </div>

        </div>


        <button
          className="plus-button"
          onClick={handleOpen}
        >
          +
        </button>

      </div>


      {showForm && (

        <div className="overlay">

          <div className="modal">

            <div className="modal-header">

              <h2>
                Add Profile Details
              </h2>

              <button
                className="close"
                onClick={handleClose}
              >
                ×
              </button>

            </div>


            <form onSubmit={handleSave}>

              <label>
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />


              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />


              <label>
                Points
              </label>

              <input
                type="number"
                name="points"
                min="0"
                value={formData.points}
                onChange={handleChange}
              />


              <div className="buttons">

                <button
                  type="button"
                  className="cancel"
                  onClick={handleClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="save"
                >
                  Save
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;