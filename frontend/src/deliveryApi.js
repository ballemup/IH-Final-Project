import axios from "axios";

//getDELIVERY ZONES
const options = {
  method: "POST",
  url: "https://postmatesapiserg-osipchukv1.p.rapidapi.com/getDeliveryZones",

  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "x-rapidapi-key": "05b2a0319dmsh0b716277be6d6abp1f85d0jsn3cefcf973afa",
    "x-rapidapi-host": "PostmatesAPIserg-osipchukV1.p.rapidapi.com",
  },
  data: { apiKey: "<REQUIRED>", customerId: "<REQUIRED>" },

//getDELIVERY QUOTE
const options = {
    method: "POST",
    url: "https://postmatesapiserg-osipchukv1.p.rapidapi.com/getDeliveryQuote",
  
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "x-rapidapi-key": "05b2a0319dmsh0b716277be6d6abp1f85d0jsn3cefcf973afa",
      "x-rapidapi-host": "PostmatesAPIserg-osipchukV1.p.rapidapi.com",
    },
    data: { apiKey: "<REQUIRED>", customerId: "<REQUIRED>" },
  data: {
      customerId: '<REQUIRED>',
      pickupAddress: '<REQUIRED>',
      dropoffAddress: '<REQUIRED>',
      apiKey: '<REQUIRED>',
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

