import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addinfo = () => {
  const initialState = {
    profile: {
      name: "",
      role: "",
      location: "",
      avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
    },
    contact: {
      fullName: "",
      email: "",
      phone: "",
      mobile: "",
      address: "",
    },
    social: {
      website: "",
      github: "",
      twitter: "",
      instagram: "",
      facebook: "",
    },
    progress: {
      labels: [
        "Web Design",
        "Website Markup",
        "One Page",
        "Mobile Template",
        "Backend API",
      ],
      left: [50, 60, 55, 65, 75],
      right: [45, 55, 60, 70, 80],
    },
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : initialState
  );

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userInfo", JSON.stringify(formData));
    navigate("/");
  };

  return (
    <>
      <div className="container-fluied ">
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="row p-5 gap-4">
            <div className="card col p-2">
              <h4>Basic Profile Info</h4>
              <div className="card-body">
                <div className="">
                  <label className="block font-semibold">Upload Image:</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="mb-4"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (!file) return;
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const base64Image = reader.result;
                        handleChange("profile", "avatar", base64Image);
                      };
                      reader.readAsDataURL(file);
                    }}
                  />
                </div>
                <input
                  className="form-control my-2"
                  placeholder="Name"
                  onChange={(e) =>
                    handleChange("profile", "name", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Role"
                  value={formData.profile.role}
                  onChange={(e) =>
                    handleChange("profile", "role", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Location"
                  value={formData.profile.location}
                  onChange={(e) =>
                    handleChange("profile", "location", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="card col p-2">
              <h4>Contact Info</h4>
              <div className="card-body">
                <input
                  className="form-control my-2"
                  placeholder="Full Name"
                  value={formData.contact.fullName}
                  onChange={(e) =>
                    handleChange("contact", "fullName", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Email"
                  value={formData.contact.email}
                  onChange={(e) =>
                    handleChange("contact", "email", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Phone"
                  value={formData.contact.phone}
                  onChange={(e) =>
                    handleChange("contact", "phone", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Mobile"
                  value={formData.contact.mobile}
                  onChange={(e) =>
                    handleChange("contact", "mobile", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Address"
                  value={formData.contact.address}
                  onChange={(e) =>
                    handleChange("contact", "address", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="card col p-2">
              <h4>Social Links</h4>
              <div className="card-body">
                <input
                  className="form-control my-2"
                  placeholder="Website"
                  value={formData.social.website}
                  onChange={(e) =>
                    handleChange("social", "website", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Github"
                  value={formData.social.github}
                  onChange={(e) =>
                    handleChange("social", "github", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Twitter"
                  value={formData.social.twitter}
                  onChange={(e) =>
                    handleChange("social", "twitter", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Instagram"
                  value={formData.social.instagram}
                  onChange={(e) =>
                    handleChange("social", "instagram", e.target.value)
                  }
                />
                <input
                  className="form-control my-2"
                  placeholder="Facebook"
                  value={formData.social.facebook}
                  onChange={(e) =>
                    handleChange("social", "facebook", e.target.value)
                  }
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addinfo;
