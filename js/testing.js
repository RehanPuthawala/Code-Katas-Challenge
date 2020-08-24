// fetch(
//   "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
//       "x-rapidapi-key": "8462fc9a68msha8404b3c88f39adp1566c0jsnfa989c58e919",
//     },
//   }
// )
//   .then((response) => {

//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const fetchData = async () => {
  const response = await axios.get(
    "https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations",
    {
      params: {
        language: "en-gb",
      },
      method: "GET",
      headers: {
        "x-rapidapi-host": "priaid-symtpom-checker-v1.p.rapidapi.com",
        "x-rapidapi-key": "8462fc9a68msha8404b3c88f39adp1566c0jsnfa989c58e919",
      },
    }
  );

  console.log(response);
};

fetchData();
