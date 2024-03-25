import React, {useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import {Product} from '~/services/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import productImages from '~/assets/img/products';
import {calculatePrice} from '~/utils/price';
import {commonStyle} from '~/styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '~/routes';

type ProductCardProps = {
  product: Product;
  onPressProduct: () => void;
};

export default function ProductCard({
  product,
  onPressProduct,
}: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPressProduct}>
      <Image
        style={styles.image}
        source={
          product.remote ? {uri: product.image} : productImages[product.id]
        }
      />
      <View style={styles.price}>
        <Text style={styles.finalPrice}>R${calculatePrice(product)}</Text>
        {product.discount && (
          <Text style={commonStyle.hidden}>R${product.price}</Text>
        )}
      </View>
      <Text style={styles.title}>{product.title}</Text>
    </TouchableOpacity>
  );
}
