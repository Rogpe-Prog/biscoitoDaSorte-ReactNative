import React, { Component } from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Image ,
  TouchableOpacity
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frase = [
      '早上好。',
      '早上好。',
      '很高兴认识你。',
      '你好吗？',
      '我要一杯啤酒。',
      '很好，谢谢。你呢？',
      '很高兴认识你。',
      '年年 有餘',
      '可以便宜一点儿吗?',
      '你可以说慢一点儿吗?'
    ];
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length)

    this.setState({
      textoFrase: ' " ' + this.frase[numeroAleatorio] + ' "',
      img: require('./src/biscoitoAberto.png')
    })
  }
  

  render(){
    return(
      <View style={styles.container}> 

      <TouchableOpacity onPress={this.quebraBiscoito}>
        <Image 
          source={this.state.img}
          style={styles.img}

        />
      </TouchableOpacity>

      <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

      {/* <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito} >
        <View style={styles.btnArea} >
          <Text style={styles.btnTexto}>Abrir biscoito!</Text>
        </View>
      </TouchableOpacity>         */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#227b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#447b22'
  },

})


export default App;
