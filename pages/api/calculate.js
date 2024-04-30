import axios from "axios";

export default function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel",
    params: { distance: req.query.distance, vehicle: req.query.vehicle },
    headers: {
      "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
      "x-rapidapi-key": "f8c57494a0msh1339ca9b90aaecep194168jsn5b566184b0e0",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
