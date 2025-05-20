import { useState } from "react";
import {
  handleSubmit,
  data,
  handleAddEdu,
  handledeleteEdu,
  handleEduChange,
  addProperty,
  DeleteProperty,
  DeleteEduProperty,
  updateProperty,
  handleimg,
  addEduInput,
} from "../js/handleButtons";
// import { useNavigate } from "react-router-dom";

const Addinfo = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : data
  );

  return (
    <>
      <div className="container-fluied ">
        <form onSubmit={(e) => handleSubmit(formData, e)} className="mt-4">
          <div className="row p-5 gap-4">
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
                  handleimg("avatar", base64Image);
                };
                reader.readAsDataURL(file);
              }}
            />
            <div className="card col-md-4 p-2">
              <div className="m-2  align-items-center">
                <div>
                  <span className="font-semibold fs-3">Basic Profile Info</span>
                  <span
                    onClick={() =>
                      addProperty("profile", formData, setFormData)
                    }
                    className="btn btn-outline-dark ms-3 p-1"
                  >
                    Add
                  </span>
                </div>
                {formData.profile.map((item, index) => (
                  <div
                    key={index}
                    className="m-2 d-flex align-items-center position-relative"
                  >
                    <label htmlFor="" className=" d-flex p-1 fs-3 fw-bold">
                      {item.key}
                    </label>
                    <input
                      className="form-control my-2 ms-2 p-2"
                      placeholder={item.key}
                      value={item.value}
                      onChange={(e) =>
                        updateProperty(
                          "profile",
                          item,
                          e.target.value,
                          setFormData
                        )
                      }
                    />
                    <span
                      onClick={() =>
                        DeleteProperty("profile", item.key, setFormData)
                      }
                      className="btn top-0 end-0   ms-2 p-1 position-absolute"
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card col-md-4 p-2">
              <div>
                <span className="font-semibold fs-3">Social Links</span>
                <span
                  onClick={() => addProperty("social", formData, setFormData)}
                  className="btn btn-outline-dark ms-3 p-1"
                >
                  Add
                </span>
              </div>
              {formData.social.map((item, index) => (
                <div key={index} className="m-2 position-relative d-flex ">
                  <label htmlFor={item.key}>{item.key}</label>
                  <input
                    className="form-control"
                    placeholder={item.key}
                    value={item.value}
                    onChange={(e) =>
                      updateProperty(
                        "social",
                        item,
                        e.target.value,
                        setFormData
                      )
                    }
                  />
                  <span
                    onClick={() =>
                      DeleteProperty("social", item.key, setFormData)
                    }
                    className="btn top-0 end-0  ms-2 p-1 position-absolute"
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="m-2 border p-2 rounded ">
                <span className="font-semibold fs-3 ">Education</span>
                <span
                  onClick={() => handleAddEdu(formData, setFormData)}
                  className="btn btn-outline-dark ms-3"
                >
                  Add
                </span>
              </div>
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="m-auto gap-2 col-md-3 card p-3 position-relative"
                >
                  <span
                    onClick={() =>
                      handledeleteEdu(index, formData, setFormData)
                    }
                    className="position-absolute top-0 end-0 btn  me-1 p-0"
                  >
                    X
                  </span>
                  <div className="d-flex align-items-center">
                    <label htmlFor="" className="d-flex p-1 fs-3 fw-bold">
                      {edu.key}
                    </label>
                    <span
                      onClick={() =>
                        addEduInput(edu.key, formData, setFormData)
                      }
                      className="btn btn-outline-dark ms-3 p-1"
                    >
                      Add
                    </span>
                  </div>
                  {edu.value.map((item, index) => (
                    <div
                      className="d-flex align-items-center position-relative"
                      key={index}
                    >
                      <label htmlFor="">{item.key}</label>
                      <input
                        value={item.value}
                        onChange={(e) =>
                          handleEduChange(
                            setFormData,
                            index,
                            "course",
                            e.target.value
                          )
                        }
                        placeholder="course"
                        className="input form-control mt-1 ms-1"
                      />
                      <span
                        onClick={() =>
                          DeleteEduProperty(edu.key, item.key, setFormData)
                        }
                        className="position-absolute top-0 end-0 btn  me-1 p-0"
                      >
                        X
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addinfo;
