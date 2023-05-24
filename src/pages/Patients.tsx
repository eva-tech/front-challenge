import { useEffect, useState } from "react";

const Home = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("https://liked-joey-95.hasura.app/api/rest/patients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": `${process.env["REACT_APP_SECRET_API"]}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Membresía premium</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default Home;
