// import axios from 'axios';

// const Home = (props) => {

//   console.log(props.Data)

//   return (
//     <div className="container">
//         <div className="info_site">
//             <a target="_blank" className="coronavirus_en_peru_link" href="https://data.larepublica.pe/envivo-casos-confirmados-muertes-coronavirus-peru/">
//                 <div className="coronavirus_en_peru">
//                     <div className="contenedor-titulo">
//                         <h3 className="titulo-covid">CORONAVIRUS</h3>
//                         <h3 className="subtitulo-covid">EN PERÚ</h3>
//                     </div>
//                     <div className="contenedor-status dos_elementos">
//                         <p><span>TOTAL POSITIVOS: </span><span id="total_positivos"></span><span id="incremento_positivos"></span></p>
//                         <p><span>FALLECIDOS: </span><span id="total_fallecidos"></span><span id="incremento_fallecidos"></span></p>
//                         <p><span>ALTAS HOSPITALARIAS: </span><span id="total_altas"></span><span id="incremento_altas"></span></p>
//                     </div>
//                 </div>
//             </a>
//             <a target="_blank" className="vacunacion_en_peru_link" href="https://data.larepublica.pe/avance-vacunacion-covid-19-peru/">
//                 <div className="vacunacion_en_peru">
//                     <div className="contenedor-titulo">
//                         <h3 className="titulo-covid">VACUNACIÓN</h3>
//                         <h3 className="subtitulo-covid">EN PERÚ</h3>
//                     </div>
//                     <div className="contenedor-status">
//                         <p><span>VACUNACIÓN COMPLETA: </span><span id="vacunacion_completa"></span></p>
//                         <p><span>TOTAL DOSIS APLICADAS: </span><span id ="total_dosis1"></span></p>
//                         <p><span>DOSIS ÚLTIMO DÍA: </span><span id="ayer_total_dosis"></span></p>
//                     </div>
//                 </div>
//             </a>
//         </div>
//     </div>
//   )
// }

// Home.getInitialProps = async () => {

//   // const url = 'https://raw.githubusercontent.com/annaabsi/git-scraper-vacunacion/main/resultados/pongo_el_hombro.json'
//   const url = 'https://pokeapi.co/api/v2/pokemon/1/'


//   // const xd = fetch(url)
//   // .then(response => response.json())
//   // .then(data => console.log(data));

//   const object_fetch = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/menu',
//         'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
//     }
// }

// const posts = await axios.get(`https://cronosservices.glr.pe/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data&limit=6&page=1&total=1`, object_fetch);

// return { 
//   Data: posts.data
// };

// }




import axios from 'axios';

const Home = (props) => {

  const ayer_total_dosis = props.Vacuna.ayer_total_dosis.replace(/,/g, '.')
  const total_dosis = props.Vacuna.total_dosis.replace(/,/g, '.')
  const vacunacion_completa = props.Vacuna.vacunacion_completa.replace(/,/g, '.')

  const ayer_altas = props.Contagios.ayer_altas.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  const ayer_confirmados = props.Contagios.ayer_confirmados.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  const ayer_fallecidos = props.Contagios.ayer_fallecidos.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  const total_altas = props.Contagios.total_altas.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  const total_confirmados = props.Contagios.total_confirmados.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  const total_fallecidos = props.Contagios.total_fallecidos.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

  return (
    <div className="container">
      <div className="info_site">
        <a target="_blank" rel="noreferrer" className="coronavirus_en_peru_link" href="https:data.larepublica.pe/envivo-casos-confirmados-muertes-coronavirus-peru/">
          <div className="coronavirus_en_peru">
            <div className="contenedor-titulo">
              <h3 className="titulo-covid">CORONAVIRUS</h3>
              <h3 className="subtitulo-covid">EN PERÚ</h3>
            </div>
            <div className="contenedor-status dos_elementos">
              <p><span>TOTAL POSITIVOS: </span><span id="total_positivos">{total_confirmados}</span><span id="incremento_positivos">{` (${ayer_confirmados})`}</span></p>
              <p><span>FALLECIDOS: </span><span id="total_fallecidos">{total_fallecidos}</span><span id="incremento_fallecidos">{` (${ayer_fallecidos})`}</span></p>
              <p><span>ALTAS HOSPITALARIAS: </span><span id="total_altas">{total_altas}</span><span id="incremento_altas">{` (${ayer_altas})`}</span></p>
            </div>
          </div>
        </a>
        <a target="_blank" rel="noreferrer" className="vacunacion_en_peru_link" href="https:data.larepublica.pe/avance-vacunacion-covid-19-peru/">
          <div className="vacunacion_en_peru">
            <div className="contenedor-titulo">
              <h3 className="titulo-covid">VACUNACIÓN</h3>
              <h3 className="subtitulo-covid">EN PERÚ</h3>
            </div>
            <div className="contenedor-status">
              <p className="vacunacion_completa"><span>VACUNACIÓN COMPLETA: </span><span>{vacunacion_completa}</span></p>
              <p><span>TOTAL DOSIS APLICADAS: </span><span id="total_dosis1">{total_dosis}</span></p>
              <p><span>DOSIS ÚLTIMO DÍA: </span><span id="ayer_total_dosis">{ayer_total_dosis}</span></p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {

  const vacuna = await axios.get('https://raw.githubusercontent.com/annaabsi/git-scraper-vacunacion/main/resultados/pongo_el_hombro.json');
  const contagios = await axios.get('https://raw.githubusercontent.com/annaabsi/git-scraper-covid19/main/resultados/covid.json');
  return {
    Vacuna: vacuna.data,
    Contagios: contagios.data
  };
}

export default Home;
