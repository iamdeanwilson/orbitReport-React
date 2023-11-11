import './styling.css';

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
        <th>Name</th>
        <th>Type of Satellite</th>
        <th>Launch Date</th>
        <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((sat) => {
        return(
          <tr key={sat.id}>
            <td>{sat.name}</td>
            <td>{sat.type}</td>
            <td>{sat.launchDate}</td>
            <td>{sat.operational ? "active" : "inactive"}</td>
          </tr>
        )
        }
      )}
     </tbody>
   </table>
  );
};

export default Table;