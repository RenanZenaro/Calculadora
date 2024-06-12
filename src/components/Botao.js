import { Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get("window")

export default props => {

    const estilosBotao = [estilos.botao]
    if (props.dobro) estilosBotao.push(estilos.botaoDuplo)
    if (props.triplo) estilosBotao.push(estilos.botaoTriplo)
    if (props.operacao) estilosBotao.push(estilos.botaoOperacao)

    return(
        <TouchableHighlight style={estilos.borda} onPress={() => props.onClick(props.label)}>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    botao: {
        fontSize: 40,
        width: width / 4,
        height: width / 4,
        padding: 17,
        textAlign: "center",
        borderRadius: 50,
        color: "#fff",
        backgroundColor: "rgba(0, 0, 0, 0.8)"
    },
    botaoDuplo: {
        width: width/4 * 2
    },
    botaoTriplo: {
        width: width/4 * 3
    },
    botaoOperacao: {
        backgroundColor: "#E53B0D"
    },
    borda: {
        borderRadius: 50
    }
})