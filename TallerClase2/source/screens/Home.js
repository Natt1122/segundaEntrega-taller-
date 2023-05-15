import * as React from 'react';
import * as RN from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { baseDatos } from '../config/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Objeto from '../components/Objeto';

const Home = () => {
  const navigation = useNavigation();

  const [objetos, setObjetos] = React.useState([]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RN.TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Agregar')}
        >
          <RN.Text style={styles.addButtonText}>Agregar</RN.Text>
        </RN.TouchableOpacity>
      ),
    });
  }, []);

  React.useEffect(() => {
    const collectionRef = collection(baseDatos, 'objetos');
    const q = query(collectionRef, orderBy('creadoEn', 'desc'));

    const desuscribir = onSnapshot(q, querySnapshot => {
      setObjetos(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          imagen: doc.data().imagen,
          nombre: doc.data().nombre,
          descripcion: doc.data().descripcion,
          precio: doc.data().precio,
          vendido: doc.data().vendido,
          creadoEn: doc.data().creadoEn,
        }))
      );
    });
    return desuscribir;
  }, []);

  return (
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Objetos</RN.Text>
      <RN.ScrollView style={styles.scrollContainer}>
        {objetos.map(objeto => (
          <Objeto key={objeto.id} {...objeto} />
        ))}
      </RN.ScrollView>
    </RN.View>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#333333',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  addButton: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#DDDDDD',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Home;
