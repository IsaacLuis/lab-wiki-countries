import { Link } from "react-router-dom";     // <== IMPORT

import { useState } from "react";
import { useEffect } from "react";

function CountriesList(props) {
  const [CountriesListData, setCountries] = useState([]);

  // This effect will run only once on the initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => {
    setCountries(props.CountriesListData);
  }, [props.CountriesListData]);

  return (







    
    <div className="col-5" >
      <h2>Countries</h2>
      {CountriesListData.map((countrie) => {
        return (
            

          <div key={countrie.alpha3Code} >
            
            <div class="list-group">
              {/*   ADD   */}
              <Link className="list-group-item list-group-item-action"  to={`/countries/${countrie.alpha3Code}`}> 
                {countrie.name.common} 
                <img src= {`https://flagpedia.net/data/flags/icon/72x54/${(countrie.alpha2Code).toLowerCase()}.png`}  alt='Not Found' />
               
              </Link>

              </div>
              
            
            
          </div>
          
        );
      })}
    </div>
  );
}

export default CountriesList