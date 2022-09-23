import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#191970',
    padding: 20,
  },
  paragraph: {
    margin: 12,
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#191970',
  },
  personagem: {
    color: 'white',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    marginTop: 20,
    fontSize: 15,
    height: 40,
    width: 350,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
    fontSize: 15,
    width: 120,
    height: 35,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'center',
    alignSelf: 'center'
  },
  imagemPersonagem: {
    width: 200,
    height: 350,
    alignSelf: 'center',
  }
});

