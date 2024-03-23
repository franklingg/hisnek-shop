import React, {useCallback, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigationParamList} from '~/routes';
import ReturnButton from '~/components/ReturnButton';
import productImages from '~/assets/img/products';
import {commonStyle} from '~/styles';
import {calculatePrice} from '~/utils/price';
import Button from '~/components/Button';
import {Host, Portal} from 'react-native-portalize';
import AddRemoveHelper from '~/components/AddRemoveHelper';

type ProductProps = NativeStackScreenProps<NavigationParamList, 'Product'>;

export default function ProductPage({route}: ProductProps) {
  const product = route.params.product;

  const [quantity, setQuantity] = useState(1);

  const changeQuantity = useCallback(
    (change: number) => {
      setQuantity(quantity + change);
    },
    [quantity],
  );

  return (
    <Host>
      <ReturnButton />
      <ScrollView contentContainerStyle={styles.content}>
        <Image style={styles.image} source={productImages[product.id]} />
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
            onChangeValue={changeQuantity}
          />
          <Button enabled={quantity > 0}>
            <Text style={styles.addCart}>Adicionar ao carrinho</Text>
          </Button>
        </View>
      </Portal>
    </Host>
  );
}
