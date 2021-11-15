"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.js

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

const Home = (props)=>{
    const ayer_total_dosis = props.Vacuna.ayer_total_dosis.replace(/,/g, '.');
    const total_dosis = props.Vacuna.total_dosis.replace(/,/g, '.');
    const vacunacion_completa = props.Vacuna.vacunacion_completa.replace(/,/g, '.');
    const ayer_altas = props.Contagios.ayer_altas.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const ayer_confirmados = props.Contagios.ayer_confirmados.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const ayer_fallecidos = props.Contagios.ayer_fallecidos.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const total_altas = props.Contagios.total_altas.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const total_confirmados = props.Contagios.total_confirmados.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const total_fallecidos = props.Contagios.total_fallecidos.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "info_site",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "coronavirus_en_peru_link",
                    href: "https:data.larepublica.pe/envivo-casos-confirmados-muertes-coronavirus-peru/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "coronavirus_en_peru",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "contenedor-titulo",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "titulo-covid",
                                        children: "CORONAVIRUS"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "subtitulo-covid",
                                        children: "EN PER\xda"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "contenedor-status dos_elementos",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "TOTAL POSITIVOS: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "total_positivos",
                                                children: total_confirmados
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "incremento_positivos",
                                                children: ` (${ayer_confirmados})`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "FALLECIDOS: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "total_fallecidos",
                                                children: total_fallecidos
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "incremento_fallecidos",
                                                children: ` (${ayer_fallecidos})`
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "ALTAS HOSPITALARIAS: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "total_altas",
                                                children: total_altas
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "incremento_altas",
                                                children: ` (${ayer_altas})`
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    target: "_blank",
                    rel: "noreferrer",
                    className: "vacunacion_en_peru_link",
                    href: "https:data.larepublica.pe/avance-vacunacion-covid-19-peru/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "vacunacion_en_peru",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "contenedor-titulo",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "titulo-covid",
                                        children: "VACUNACI\xd3N"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "subtitulo-covid",
                                        children: "EN PER\xda"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "contenedor-status",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "vacunacion_completa",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "VACUNACI\xd3N COMPLETA: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: vacunacion_completa
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "TOTAL DOSIS APLICADAS: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "total_dosis1",
                                                children: total_dosis
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "DOSIS \xdaLTIMO D\xcdA: "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                id: "ayer_total_dosis",
                                                children: ayer_total_dosis
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
Home.getInitialProps = async ()=>{
    const vacuna = await external_axios_default().get('https://raw.githubusercontent.com/annaabsi/git-scraper-vacunacion/main/resultados/pongo_el_hombro.json');
    const contagios = await external_axios_default().get('https://raw.githubusercontent.com/annaabsi/git-scraper-covid19/main/resultados/covid.json');
    return {
        Vacuna: vacuna.data,
        Contagios: contagios.data
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(168));
module.exports = __webpack_exports__;

})();