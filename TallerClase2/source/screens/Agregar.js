import * as React from 'react';
import * as RN from 'react-native';
import { baseDatos } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default function Agregar() {
  const navigation = useNavigation();

  const [newObjeto, setNewObjeto] = React.useState({
    imagen: '🛍️',
    nombre: '',
    descripcion: '',
    precio: 0,
    vendido: false,
    creadoEn: new Date(),
  });

  const enviar = async () => {
    await addDoc(collection(baseDatos, 'objetos'), newObjeto);
    navigation.goBack();
  };

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Agregar objeto</RN.Text>
      <RN.Text style={styles.imagen}>🛍️</RN.Text>
      <RN.TextInput
        style={styles.inputContainer}
        placeholder="Nombre"
        onChangeText={text => setNewObjeto({ ...newObjeto, nombre: text })}
      />
      <RN.TextInput
        style={styles.inputContainer}
        placeholder="Descripción"
        onChangeText={text => setNewObjeto({ ...newObjeto, descripcion: text })}
      />
      <RN.TextInput
        style={styles.inputContainer}
        placeholder="$ Precio"
        keyboardType="number-pad"
        onChangeText={text => setNewObjeto({ ...newObjeto, precio: text })}
      />
      <RN.TouchableOpacity style={styles.button} onPress={enviar}>
        <RN.Text style={styles.buttonText}>Guardar</RN.Text>
      </RN.TouchableOpacity>
      <RN.Text>{JSON.stringify(newObjeto)}</RN.Text>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 0,
  },
  imagen: {
    fontSize: 100,
    borderWidth: 0,
    borderColor: '#DDDDDD',
    borderRadius: 50,
    marginBottom: 20,
  },
  inputContainer: {
    width: '30%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});
