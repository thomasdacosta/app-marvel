import React from "react";
import { Button, Image, Linking, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import Estilos from "../estilos/Estilos";
import { capitalizeFirstLetter } from "../js/Common";
import ListarUrls from "../componentes/ListarUrls";

const App = ({ route, navigation }) => {
  const { item } = route.params;

  let data = new Date(Date.parse(item?.modified));
  let dataFormatada = new Intl.DateTimeFormat("pt-BR",
    { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" })
    .format(data);
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let preco = formatter.format(item?.prices[0].price);

  const ItemHQ = ({ descricao, texto }) => {
    return (<>
      <View style={Estilos.linha} />
      <Text style={Estilos.detalheDescricaoPersonagemAmarelo}>{descricao}</Text>
      <Text style={Estilos.detalheDescricaoPersonagem}>{texto}</Text>
      <View><Text></Text></View>
    </>);
  };

  return (
    <SafeAreaView style={Estilos.safeAreaView}>
      <ScrollView>
        <View style={Estilos.alignVertical}>
          <View style={{ flex: 0.1 }} />
          <Text style={Estilos.detalhePersonagem}>{item.title}</Text>
        </View>
        <Image
          style={Estilos.imagemPersonagem}
          source={{
            uri: item.thumbnail.path + "/portrait_uncanny.jpg",
          }}
        />
        <View><Text></Text></View>
        <View><Text></Text></View>

        <ItemHQ descricao="Preço" texto={preco} />
        <ItemHQ descricao="Formato" texto={item?.format} />
        <ItemHQ descricao="Número da Edição" texto={item?.issueNumber} />
        <ItemHQ descricao="Número de Páginas:" texto={item?.pageCount} />
        <ItemHQ descricao="Descrição" texto={item?.description} />
        <ItemHQ descricao="Descrição Variante" texto={item?.variantDescription} />
        <ItemHQ descricao="Data de Modificação" texto={dataFormatada} />
        <ItemHQ descricao="ISBN" texto={item?.isbn} />
        <ItemHQ descricao="UPC" texto={item?.upc} />
        <ItemHQ descricao="EAN" texto={item?.ean} />
        <ItemHQ descricao="ISSN" texto={item?.issn} />
        <ListarUrls item={item} />

        <View style={{ flex: 0.1 }} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
