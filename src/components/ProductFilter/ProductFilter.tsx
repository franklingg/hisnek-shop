/* eslint-disable react/no-unstable-nested-components */
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles from './styles';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {colors, commonStyle} from '~/styles';

export type FilterRefProps = {
  present: () => void;
};

const ProductFilter = forwardRef<FilterRefProps>(function ProductFilter(
  _,
  ref,
) {
  const modalRef = useRef<BottomSheetModal>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        present: () => modalRef.current?.present(),
      };
    },
    [],
  );

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={modalRef}
        backdropComponent={backdropProps => (
          <BottomSheetBackdrop
            {...backdropProps}
            opacity={0.5}
            enableTouchThrough={false}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
            style={[
              {backgroundColor: colors.darkBackdrop},
              StyleSheet.absoluteFillObject,
            ]}
          />
        )}
        snapPoints={['40%']}>
        <BottomSheetView style={styles.container}>
          <Text style={styles.title}>Filtrar</Text>
          <View style={styles.field}>
            <Text style={commonStyle.text}>Preço (R$)</Text>
          </View>
          <View style={styles.field}>
            <Text style={commonStyle.text}>Categorias</Text>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

export default ProductFilter;
