
const Carinfo = ({ id,brand, km ,color,newCar }) => {
    return (
      <div>
          <h2>Detalhes do carro id: {id}</h2>
          <ul>
              <li>Marca: {brand}</li> 
              <li>Km: {km}</li>
              <li>Cor: {color}</li>
          </ul>
          {newCar ? (<p>Este carro é novo!</p>) : (<p>Este carro não e novo</p>)}
      </div>
    )
  }
  
  export default Carinfo