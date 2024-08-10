// Services/Api.jsx

// const BASE_URL = "http://13.201.136.34:8000/";
const BASE_URL = "api/";

export const loginVendor = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}vendor/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(JSON.stringify(errorData));
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Dashboard
export const fetchVendorProfile = async () => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("No authentication token found");
    }

    const response = await fetch(`${BASE_URL}vendor/profile/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include token for authorization
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching profile data:", errorData); // Log detailed error
      throw new Error(errorData.detail || "Failed to fetch profile data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in fetchVendorProfile:", error); // Log error message
    throw new Error(error.message);
  }
};
