import React, {useCallback, useState} from 'react';
import {Alert, Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigationParamList} from '~/routes';
import productImages from '~/assets/img/products';
import {commonStyle} from '~/styles';
import {calculatePrice} from '~/utils/price';
import Button from '~/components/Button';
import {Host, Portal} from 'react-native-portalize';
import {useCart} from '~/contexts/cartContext';
import ReturnButton from '~/components/ReturnButton';
import AddRemoveHelper from '~/components/AddRemoveHelper';

type ProductProps = NativeStackScreenProps<NavigationParamList, 'Product'>;

export default function ProductPage({route}: ProductProps) {
  const product = route.params.product;

  const {addItem} = useCart();
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = useCallback(
    (change: number) => {
      setQuantity(quantity + change);
    },
    [quantity],
  );

  const addToCart = useCallback(() => {
    addItem({product, quantity});
    setQuantity(1);
    Alert.alert('Adicionado ao carrinho');
  }, [addItem, product, quantity]);

  return (
    <Host>
      <ReturnButton />
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          style={styles.image}
          source={
            product.remote ? {uri: product.image} : productImages[product.id]
          }
        />
        <View style={styles.tags}>
          {product.tags.map(t => (
            <Text key={t} style={styles.tagItem}>
              {t}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>{product.title}</Text>
        <View>
          <Text style={commonStyle.bold}>Preço</Text>
          <Text style={styles.price}>R${calculatePrice(product)}</Text>
        </View>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      <Portal>
        <View style={styles.actions}>
          <AddRemoveHelper
            currentValue={quantity}
            onIncrease={() => changeQuantity(1)}
            onDecrease={() => changeQuantity(-1)}
          />
          <Button enabled={quantity > 0} onPress={addToCart}>
            <Text style={styles.addCart}>Adicionar ao carrinho</Text>
          </Button>
        </View>
      </Portal>
    </Host>
  );
}
