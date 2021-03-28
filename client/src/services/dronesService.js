const getDronesList = () => {
  return fetch('http://localhost:4000/api/drones')
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.error(err));
};

export default getDronesList;