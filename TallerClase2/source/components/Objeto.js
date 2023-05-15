import * as React from 'react';
import * as RN from 'react-native';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import {AntDesign} from '@expo/vector-icons';
import { baseDatos } from '../config/firebase';

export default function Objeto({
  id,
  imagen,
  nombre,
  descripcion,
  precio,
  vendido,
}) {

  const editar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    updateDoc(docRef, {
        vendido: true,
    });
  };

  const eliminar = () => {
    const docRef = doc(baseDatos, 'objetos', id);
    deleteDoc(docRef);
  };

  return(
    <RN.View style={styles.objetoContainer}>
      <RN.View style={styles.conEliminar}>
        <RN.Text style={styles.imagen}>{imagen}</RN.Text>
        <AntDesign onPress={eliminar} name='delete' size={25}/>            
      </RN.View>      
      <RN.Text style={styles.nombre}>{nombre}</RN.Text>
      <RN.Text style={styles.descripcion}>{descripcion}</RN.Text>
      <RN.Text style={styles.precio}>${precio}</RN.Text>
      {vendido ? (
        <RN.TouchableOpacity style={styles.button}>
          <RN.Text style={styles.button}>Cargado</RN.Text>
        </RN.TouchableOpacity>
      ) : (
        <RN.TouchableOpacity 
          style={styles.button}
          onPress={editar}>
          <RN.Text style={styles.button}>Cargar</RN.Text>
        </RN.TouchableOpacity>
      )}      
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  objetoContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
  descripcion: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666666',
  },
  imagen: {
    fontSize: 100,
    borderWidth: 0,
    borderColor: '#DDDDDD',
    borderRadius: 50,
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  conEliminar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  button:{
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});