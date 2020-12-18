import React from 'react';

const styLoja = {
  marginLeft: "30px"
};

function Loja() {
  return(
<>
    <title>Nossas lojas - AmareLux Eletro</title>
      <div className = "jumbotron mt-2">
          <header>
              <h2 className = "display-6">Nossas Lojas</h2>
              <p className="lead">Elas existem especialmente pra você!</p>
              <hr className="my-1"></hr>
          </header>
      </div>
      <div className="Lojas" style={styLoja} /*onMouseOver={destacarLoja} onMouseOut={normalLoja}*/>
          <h3>Rio de Janeiro - RJ</h3>
          <p>Avenida Almirante Frontin, 50</p>
          <p>2 &ordm; piso</p>
          <p>Ramos</p>
          <p>(21) 2222-2222</p>
      </div>

      <div className="Lojas" /*onMouseOver={destacarLoja} onMouseOut={normalLoja}*/>
          <h3>São Paulo - SP</h3>
          <p>Estrada das Lágrimas, 1029</p>
          <p>Loja 2</p>
          <p>Ipiranga</p>
          <p>(11) 1111-2222</p>
      </div>

      <div className="Lojas" /*onMouseOver={destacarLoja} onMouseOut={normalLoja}*/>
          <h3>Vila Velha - ES</h3>
          <p>Rua Sebastião Gaiba, 100</p>
          <p>Térreo</p>
          <p>Vila Garrido</p>
          <p>(27) 2222-1111</p>
      </div>
  </>
  );
}

export default Loja;