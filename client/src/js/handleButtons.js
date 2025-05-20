const handleSubmit = (formData, e) => {
  e.preventDefault();
  localStorage.setItem("userInfo", JSON.stringify(formData));
  alert("Profile Updated");
  // navigate("/");
};

const data = {
  profile: [
    { key: "name", value: "SHAHBAJ AHMAD" },
    { key: "role", value: "Full Stack Developer" },
    { key: "address", value: "Subhash Nagar, Bermo, Bokaro" },
    { key: "district", value: "Dist- Bokaro-829124 (Jharkhand)" },
    { key: "phone", value: "9999999999" },
    { key: "email", value: "youremail@gmail.com" },
  ],
  avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
  careerObjective:
    "Aim to be associated with a progressive organization which offers an excellent atmosphere to prove myself by utilizing all technical knowledge into practice and profit myself with experience and valuable knowledge for the development and growth of the organization.",
  education: [
    {
      key: "DEGREE",
      value: [
        { key: "course", value: "bca" },
        { key: "yearOfPass", value: "2024" },
        { key: "percentage", value: "73%" },
        { key: "university", value: "kolhan university" },
        { key: "division", value: "1st" },
      ],
    },
  ],

  skills: {
    office: "Microsoft Office 2007, 2003",
    technical: "Tally, Typing",
  },
  hobbies: ["Interact with people", "Travelling", "Listening Hollywood Song"],
  social: [
    { key: "🌐 website", value: "https://bootdey.com" },
    { key: "💻 github", value: "https://github.com" },
    { key: "🐦 twitter", value: "https://twitter.com" },
    { key: "📸 Iinstagram", value: "https://instagram.com" },
    { key: "📘 facebook", value: "https://facebook.com" },
  ],
  progress: {
    left: [60, 70, 65, 75, 90],
    right: [50, 65, 60, 70, 85],
    labels: [
      "Web Design",
      "Website Markup",
      "One Page",
      "Mobile Template",
      "Backend API",
    ],
  },
};

const handleAddEdu = (formData, setFormData) => {
  const field = prompt("Enter the field name:");
  if (!field) return;
  setFormData({
    ...formData,
    education: [
      ...formData.education,
      {
        key: field,
        value: [{ key: "name", value: "" }],
      },
    ],
  });
};
const handledeleteEdu = (index, formData, setFormData) => {
  if (confirm("Are you sure you want to delete this education?")) {
    const updatedEdu = [...formData.education];
    updatedEdu.splice(index, 1);
    setFormData({ ...formData, education: updatedEdu });
  }
};
const handleEduChange = (setFormData, index, field, value) => {
  setFormData((prev) => [...prev,]);
};
const addEduInput = (key, formData, setFormData) => {
  const field = prompt("Enter the field to add:");
  if (!field) return;
  setFormData({
    ...formData,
    education: [
      ...formData.education.filter((edu) => edu.key !== key),
      {
        ...formData.education.find((edu) => edu.key === key),
        key: key,
        value: [
          ...formData.education.find((edu) => edu.key === key).value,
          { key: field, value: "" },
        ],
      },
    ],
  });
};
const DeleteEduProperty = (item, targetKey, setFormData) => {
  //   if (confirm("Are you sure you want to delete this property?")) {
  setFormData((prev) => {
    const updatedEdu = prev.education.map((eduGroup) => {
      if (eduGroup.key === item) {
        return {
          ...eduGroup,
          value: eduGroup.value.filter((item) => item.key !== targetKey),
        };
      }
      return eduGroup;
    });

    return { ...prev, education: updatedEdu };
  });
  //   }
};

const updateProperty = (item, field, value, setFormData) => {
  setFormData((prev) => ({
    ...prev,
    [item]: prev[item].map((i) =>
      i.key === field.key ? { ...i, value: value } : i
    ),
  }));
};

const addProperty = (item, formData, setFormData) => {
  const field = prompt("Enter the field to add:");
  if (!field) return;
  setFormData({
    ...formData,
    [item]: [
      ...formData[item],
      {
        key: field,
        value: "",
      },
    ],
  });
};
const DeleteProperty = (item, key, setFormData) => {
  if (confirm("Are you sure you want to delete this property?")) {
    setFormData((prev) => ({
      ...prev,
      [item]: prev[item].filter((i) => i.key !== key),
    }));
  }
};
const handleimg = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};
export {
  handleSubmit,
  data,
  handleAddEdu,
  handledeleteEdu,
  handleEduChange,
  addEduInput,
  DeleteEduProperty,
  addProperty,
  DeleteProperty,
  updateProperty,
  handleimg,
};
