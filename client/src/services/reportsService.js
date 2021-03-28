const reportByDrone = (id) => {
  return fetch(`http://localhost:4000/api/report/${id}`)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.error(err));
};

export default reportByDrone;