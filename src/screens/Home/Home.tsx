import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Alert, SafeAreaView, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import {NavigationParamList} from '~/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {colors, commonStyle} from '~/styles';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {getMockProducts, getProducts} from '~/services/api';
import Loading from '~/components/Loading';
import {Product} from '~/services/types';
import ProductCard from '~/components/ProductCard';
import ProductFilter from '~/components/ProductFilter/ProductFilter';
import {BottomSheetModal, TouchableOpacity} from '@gorhom/bottom-sheet';
import {getCurrentUser} from 'aws-amplify/auth';
import {calculatePrice} from '~/utils/price';
import {Host} from 'react-native-portalize';

type HomeProps = NativeStackScreenProps<NavigationParamList, 'Explore'>;

export default function Home({navigation}: HomeProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [shownProducts, setShownProducts] = useState<Product[]>([]);
  const filterRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    getCurrentUser()
      .then(() => setIsLoggedIn(true))
      .catch(() => {})
      .finally(async () => {
        if (isLoggedIn !== undefined) {
          let apiProducts: Product[] = [];
          if (isLoggedIn) {
            apiProducts = await getProducts();
          } else {
            const result = await getMockProducts();
            apiProducts = result.data.allProducts;
          }
          setProducts(apiProducts);
        }
      })
      .catch(e => {
        console.error(e);
        Alert.alert('Erro ao buscar produtos');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);

  const openFilter = useCallback(() => {
    filterRef.current?.present();
  }, [filterRef]);

  const filterProducts = useCallback(
    (prices: number[], tags: string[]) => {
      setShownProducts(
        [...products].filter(p => {
          const productPrice = calculatePrice(p);
          if (
            // matches search
            p.title.toLowerCase().match(search.toLowerCase()) &&
            // matches lowest price filter
            +productPrice >= prices[0] &&
            // matches highest price filter
            +productPrice <= prices[1] &&
            // matches any of the filter tags
            (tags.length === 0 || p.tags.some(t => tags.includes(t)))
          ) {
            return p;
          }
        }),
      );
    },
    [products, search],
  );

  useEffect(() => {
    filterProducts([0, 100], []);
  }, [filterProducts, search]);

  return (
    <Host>
      {isLoading && <Loading />}
      <SafeAreaView style={styles.container}>
        <View style={[styles.header, isLoggedIn && styles.headerNoLogin]}>
          {!isLoggedIn && (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <FontAwesome name="user-circle-o" size={25} color={'gray'} />
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.filter} onPress={openFilter}>
            <FontAwesome name="filter" size={25} color={'gray'} />
            <Text style={commonStyle.text}>Filtros</Text>
          </TouchableOpacity>
        </View>

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
          renderItem={p => (
            <ProductCard
              product={p.item}
              onPressProduct={() =>
                navigation.navigate('Product', {product: p.item})
              }
            />
          )}
        />

        <ProductFilter ref={filterRef} onFilter={filterProducts} />
      </SafeAreaView>
    </Host>
  );
}
