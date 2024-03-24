import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import CartBanner from '~/assets/img/cart.svg';
import {NavigationParamList} from '~/routes';
import {useCart} from '~/contexts/cartContext';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {cartTotal} from '~/utils/price';
import Button from '~/components/Button';
import {colors, commonStyle} from '~/styles';
import CartCard from '~/components/CartCard';

type CartProps = NativeStackScreenProps<NavigationParamList, 'Cart'>;

export default function Cart({}: CartProps) {
  const {cartItems} = useCart();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      {cartItems.length ? (
        <>
          <View style={styles.cardSeparator} />
          {cartItems.map((it, idx) => (
            <React.Fragment key={idx}>
              <CartCard item={it} />
              <View style={styles.cardSeparator} />
            </React.Fragment>
          ))}
          <TextInput
            style={styles.comments}
            placeholder="Comentários"
            placeholderTextColor={colors.mediumGray}
            numberOfLines={4}
          />
          <View style={styles.ship}>
            <Text style={commonStyle.text}>Frete</Text>
            <Text style={styles.shipValue}>Grátis</Text>
          </View>
          <View style={styles.total}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>R${cartTotal(cartItems)}</Text>
          </View>
          <Button>
            <Text style={styles.continue}>Continuar</Text>
          </Button>
        </>
      ) : (
        <>
          <View style={styles.emptyBanner}>
            <CartBanner />
          </View>
          <Text style={styles.emptyTitle}>Carrinho Vazio</Text>
          <Text style={commonStyle.text}>
            Novos itens adicionados aparecerão aqui
          </Text>
        </>
      )}
    </ScrollView>
  );
}
