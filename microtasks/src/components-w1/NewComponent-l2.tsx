type NewComponentPropsType = {
    cars : CarsType[]
}

type CarsType = {
    manufacturer : string,
    model : string
}

export const NewComponent = (props : NewComponentPropsType) => {
    const {cars} = props
    
    const carsList = cars.map((car, index) => {
        return(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{car.manufacturer}</td>
              <td>{car.model}</td>
            </tr>
        )
    })
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>index</th>
              <th>manufacturer</th>
              <th>model </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {carsList}
          </tbody>
        </table>
      </>
    );
}