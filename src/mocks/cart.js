
import headerImg from "../../assets/topo.png"
import logo from "../../assets/logo.png"
import tomate from "../../assets/frutas/Tomate.png"
import brocolis from "../../assets/frutas/Brócolis.png"
import batata from "../../assets/frutas/Batata.png"
import pepino from "../../assets/frutas/Pepino.png"
import abobora from "../../assets/frutas/Abóbora.png"

const cart = {
    header: {
        title: "Detalhes da Cesta",
        img: headerImg
    },
    details: {
        title: "Cesta de Verduras",
        img: logo,
        owner: "Jenny Jack Farm",
        description: "Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha",
        price: "R$ 40,00",
        button: "Comprar"
    },
    itens: {
        title: "Itens da cesta",
        list: [
            {
                name: "Tomate",
                img: tomate
            },
            {
                name: "Brócolis",
                img: brocolis
            },
            {
                name: "Batata",
                img: batata
            },
            {
                name: "Pepino",
                img: pepino
            },
            {
                name: "Abóbora",
                img: abobora
            }
        ]
    }
}


export default cart;