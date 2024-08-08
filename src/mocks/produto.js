import Logo from "../../assets/logo.png";

import gel_limpeza from "../../assets/produtos/gel_limpeza.webp";
import niacinamida from "../../assets/produtos/niacinamida.webp";
import mandelico from "../../assets/produtos/mandelico.webp";
import protetor from "../../assets/produtos/protetor_solar.webp";

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        logo: Logo,
        nome: "KIT ANTI-MANCHAS ESSENCIAL",
        detalhe: "O kit anti-manchas inclui quatro produtos essenciais: um gel de limpeza, dois soros e um protetor solar. O gel de limpeza remove impurezas, os soros tratam manchas e melhoram a textura da pele, e o protetor solar oferece FPS 60, protegendo contra raios UVA e UVB, além de controlar a oleosidade e ter toque seco.",
        preco: " R$ 181,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                id: 1,
                nome: "Gel de Limpeza",
                imagem: gel_limpeza,
            },
            {
                id: 2,
                nome: "Protetor Solar",
                imagem: protetor,
            },
            {
                id: 3,
                nome: "Ácido Mandélico",
                imagem: mandelico,
            },
            {
                id: 4,
                nome: "Niacinamida",
                imagem: niacinamida,
            }
        ]
    }
}



export default produto;