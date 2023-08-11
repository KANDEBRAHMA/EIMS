import axios from "axios";

export async function userRegistration(formData){
    const url = "http://localhost:8081/api/employees/register";
    console.log(formData);
    return await axios.post(url,formData,)
    .then(response => {
        return response.data;
      })
      .catch(error => {
        // console.log("Error:", error);
      });
}