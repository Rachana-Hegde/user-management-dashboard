export const splitName = (fullName) => {
  const names = fullName.trim().split(" ");

  return {
    firstName: names[0] || "",
    lastName: names.slice(1).join(" ") || "",
  };
};

export const assignDepartment = (id) => {
  const departments = [
    "Engineering",
    "Human Resources",
    "Finance",
    "Marketing",
    "Sales",
    "IT",
  ];

  return departments[id % departments.length];
};