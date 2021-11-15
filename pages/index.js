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
    <>
      <div className="container">
        <div className="info_site">
          <a target="_blank" rel="noreferrer" className="coronavirus_en_peru_link" href="https:data.larepublica.pe/envivo-casos-confirmados-muertes-coronavirus-peru/">
            <div className="coronavirus_en_peru">
              <div className="contenedor-titulo">
                <h3 className="titulo-covid">CORONAVIRUS</h3>
                <h3 className="subtitulo-covid">EN PERÚ</h3>
              </div>
              <div className="contenedor-status dos_elementos">
                <p><span>TOTAL POSITIVOS: </span><span id="total_positivos">{total_confirmados}</span><span id="incremento_positivos">{` (+${ayer_confirmados})`}</span></p>
                <p><span>FALLECIDOS: </span><span id="total_fallecidos">{total_fallecidos}</span><span id="incremento_fallecidos">{` (+${ayer_fallecidos})`}</span></p>
                <p><span>ALTAS HOSPITALARIAS: </span><span id="total_altas">{total_altas}</span><span id="incremento_altas">{` (+${ayer_altas})`}</span></p>
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
      <style jsx="true">{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Roboto;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .container {
          display: flex;
          width: 974px;
          height: 80px;
          margin: 0 auto;
          background-image: url(https://perucheck.cronosmedia.glr.pe/original/2021/11/10/618c51cc8b7a9d6354691737.jpg) !important;
          background-repeat: no-repeat;
          overflow-x: hidden;
        }
        .info_site {
          width: 100%;
          height: auto;
          margin: 6px 0;
          display: flex;
        }
        .coronavirus_en_peru, .vacunacion_en_peru {
          width: 100%;
          display: flex;
        }
        .coronavirus_en_peru {
          border-right: solid 1px rgba(255, 255, 255, 0.3);
        }
        .vacunacion_en_peru {
          border-left: solid 1px rgba(255, 255, 255, 0.3);
        }
        .contenedor-titulo {
          padding-top: 8px;
          padding-left: 30px;
          display: block;
          width: 205px;
          height: 100%;
          font-weight: 700;
          color: #fff;
          font-family: "Roboto",sans-serif;
          font-size: 23px;
        }
        .titulo-covid {
          font-size: 24px;
          font-family: "Roboto",sans-serif;
          font-weight: 700;
          position: relative;
        }
        .subtitulo-covid {
          padding-left: 62px;
          font-size: 24px;
          font-weight: 700;
        }
        .titulo-covid::after {
          content: '';
          height: 23px;
          width: 4px;
          background-color: red;
          top: 2px;
          left: -11px;
          position: absolute;
        }

        .contenedor-status {
          margin: 0 0 0 15px;
          height: auto;
          width: 272px;
          padding-top: 5px;
        }
        .contenedor-status p {
          height: 19px;
          padding: 3px 5px;
          color: #fff;
          font-size: 12px;
          font-family: "Roboto",sans-serif;
          font-weight: 700;
          margin-bottom: 2px;
          letter-spacing: 1px;
        }

        .vacunacion_en_peru .contenedor-titulo{
          padding-left: 20px;
          width: 190px;
        }
        .vacunacion_en_peru .titulo-covid, .vacunacion_en_peru .subtitulo-covid {
          float: right;
        }
        .vacunacion_en_peru .contenedor-status p {
          float: right;
        }

        /*.dos_elementos {
          padding: 4px 3px;
        }*/

        .coronavirus_en_peru_link {
          text-decoration: none;
        }

        .vacunacion_completa span {
          color: yellow;
        }

        @media (max-width: 950px) {
          .container {
              width: 100%;
              max-width: 950px;
          }
          .coronavirus_en_peru {
              display: none;
          }
          .vacunacion_en_peru {
              width: 100%;
              max-width: 360px;
              border: none;
              margin: 0 auto;
          }
          .contenedor-titulo {
              padding-top: 14px;
              padding-left: 0;
          }
          .vacunacion_en_peru .contenedor-titulo {
              padding-left: 0;
              width: 124px;
              height: 55px;
          }
          .titulo-covid, .subtitulo-covid {
              font-size: 16px;
          }
          .titulo-covid::after {
              height: 16px;
              width: 3px;
              left: -8px;
          }
          .contenedor-status {
              height: 55px;
              padding-top: 14px;
              width: 195px;
          }
          .vacunacion_en_peru .contenedor-status p {
              height: 13px;
              padding: 3px 7px;
              font-size: 7px;
          }

          .coronavirus_en_peru_link {
              display: none;
          }
          .vacunacion_en_peru_link {
              margin: 0 auto;
          }
          .subtitulo-covid {
              padding-left: 48px;
          }
        }
      `}</style>
    </>
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

