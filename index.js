// Add your code here
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};
const configurationObject = {
    method: "POST",
    Headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
    },
body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object){
    console.log(object);
  });



  function submitData(name, email){
    const userData = {
      name : name,
      email : email,
    }
    const configurationObject = {
        method: "POST",
        headers:{
            "content-type": "application/json",
            Accept: "application/json",
        },
     body: JSON.stringify(userData),

    }

  return fetch("http://localhost:3000/users", configurationObject)
   .then(function (response) {
    return response.json();
   })
   .then(function (object){
    console.log(object);
   })
   .catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "error: " + error.message;
    document.body.appendChild(errorMessage);
   })
}
submitData("joseph", "josephdena34@gmail.com", configurationObject)
