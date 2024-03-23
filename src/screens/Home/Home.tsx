import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import Button from '~/components/Button';
import {NavigationParamList} from '~/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors, commonStyle} from '~/styles';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {getProducts} from '~/services/api';
import Loading from '~/components/Loading';
import {Product} from '~/services/types';
import ProductCard from '~/components/ProductCard';

type HomeProps = NativeStackScreenProps<NavigationParamList, 'Explore'>;

export default function Home({}: HomeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [shownProducts, setShownProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(apiProducts => {
        setProducts(apiProducts.data.allProducts);
      })
      .catch(() => {
        Alert.alert('Erro ao buscar produtos');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setShownProducts(
      [...products].filter(p =>
        p.title.toLowerCase().match(search.toLowerCase()),
      ),
    );
  }, [search, products]);

  return isLoading ? (
    <Loading />
  ) : (
    <SafeAreaView style={styles.container}>
      <Button style={styles.filter}>
        <FontAwesome name="filter" size={25} color={'gray'} />
        <Text style={commonStyle.text}>Filtros</Text>
      </Button>

      <View style={styles.search}>
        <FontAwesome name="search" size={20} color={'gray'} />
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar"
          placeholderTextColor={colors.mediumGray}
        />
      </View>

      <FlatList
        numColumns={2}
        data={shownProducts}
        ItemSeparatorComponent={() => <View style={styles.productGap} />}
        renderItem={p => <ProductCard product={p.item} />}
      />
    </SafeAreaView>
  );
}
