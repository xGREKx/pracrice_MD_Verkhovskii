import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>GET READY FOR ESCAPE</Text>
      <Text style={styles.textread}>С каждым безвозвратно уходящим в прошлое днем ситуация в Норвинской области становится все более и более запутанной. Непрекращающиеся бои на улицах Таркова вызвали массовую панику среди населения, заполнив беженцами ведущие из него дороги. Нашлись, впрочем, среди местных жителей и те, кто решил остаться, увидев в возникшей ситуации возможность поживиться за чужой счет. Приняв новые реалии как данность, неорганизованные одиночки из числа обитателей Таркова - Дикие - стали сбиваться в хорошо вооруженные банды, дерущиеся друг с другом за передел города. Сегодня весь Тарков разграничен невидимыми линиями на зоны влияния различных группировок. В своей жажде наживы вооруженные бандиты не остановятся ни перед чем, их не пугают ни убийства гражданских лиц, ни прямые столкновения с двумя частными военными компаниями.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
   textread: {
    margin: 24,
    marginTop: -9,
    fontSize: 12,
    textAlign: 'left',
  },
  paragraph: {
    margin: 24,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});