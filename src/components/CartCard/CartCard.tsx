import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {CartProduct} from '~/services/types';
import productImages from '~/assets/img/products';
import {calculatePrice} from '~/utils/price';
import AddRemoveHelper from '../AddRemoveHelper';
import Feather from 'react-native-vector-icons/Feather';
import {commonStyle} from '~/styles';
import {useCart} from '~/contexts/cartContext';

type CartCardProps = {
  item: CartProduct;
};

export default function CartCard({item}: CartCardProps) {
  const {removeItem, changeQuantity} = useCart();

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={productImages[item.product.id]} />
      <View style={styles.info}>
        <View style={styles.header}>
          <Text style={commonStyle.bold}>{item.product.title}</Text>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => removeItem(item.product.id)}>
            <Feather name="trash" style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>R${calculatePrice(item.product)}</Text>
          <AddRemoveHelper
            small
            currentValue={item.quantity}
            onIncrease={() =>
              changeQuantity(item.product.id, item.quantity + 1)
            }
            onDecrease={() =>
              changeQuantity(item.product.id, item.quantity - 1)
            }
          />
        </View>
      </View>
    </View>
  );
}
