/* eslint-disable react/no-unstable-nested-components */
import React, {forwardRef, useCallback, useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styles, {tagsStyles} from './styles';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {colors, commonStyle} from '~/styles';
import Button from '../Button';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import MultiSelect from 'react-native-sectioned-multi-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ALL_TAGS = [
  {id: 0, name: 'Comida'},
  {id: 1, name: 'Fruta'},
  {id: 2, name: 'Limpeza'},
  {id: 3, name: 'Ferramenta'},
];

type ProductFilterProps = {
  onFilter: (prices: number[], tags: string[]) => void;
};

const ProductFilter = forwardRef<BottomSheetModal, ProductFilterProps>(
  function ProductFilter({onFilter}, modalRef) {
    const [lowestPrice, setLowestPrice] = useState(0);
    const [highestPrice, setHighestPrice] = useState(100);
    const [tags, setTags] = useState<number[]>([]);
    const tagSelectRef = useRef(null);

    const editLimit = useCallback(
      (type: 'low' | 'high') => {
        return (text: string) => {
          const value = +text;
          if (type === 'low') {
            setLowestPrice(value < highestPrice ? value : highestPrice - 1);
          } else {
            setHighestPrice(value > lowestPrice ? value : lowestPrice + 1);
          }
        };
      },
      [highestPrice, lowestPrice],
    );

    const removeTag = useCallback(
      (id: number) => {
        setTags([...tags].filter(t => t !== id));
      },
      [tags],
    );

    const openTagSelector = useCallback(() => {
      if (tagSelectRef.current) {
        (
          tagSelectRef.current as MultiSelect<typeof ALL_TAGS>
        )._toggleSelector();
      }
    }, [tagSelectRef]);

    const performFilter = useCallback(() => {
      onFilter(
        [lowestPrice, highestPrice],
        tags.map(t => ALL_TAGS[t].name),
      );
    }, [highestPrice, lowestPrice, onFilter, tags]);

    const cleanFilters = useCallback(() => {
      setLowestPrice(0);
      setHighestPrice(100);
      setTags([]);
      performFilter();
    }, [performFilter]);

    return (
      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={modalRef}
          index={0}
          keyboardBlurBehavior="restore"
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
          snapPoints={['55%']}>
          <BottomSheetView style={styles.container}>
            <Text style={styles.title}>Filtrar</Text>
            <View style={styles.field}>
              <Text style={commonStyle.text}>Preço (R$)</Text>
              <View style={styles.prices}>
                <View style={styles.priceInput}>
                  <Text style={commonStyle.text}>R$</Text>
                  <BottomSheetTextInput
                    style={commonStyle.text}
                    keyboardType="number-pad"
                    value={lowestPrice.toString()}
                    onChangeText={editLimit('low')}
                  />
                </View>
                <Text style={commonStyle.text}>até</Text>
                <View style={styles.priceInput}>
                  <Text style={commonStyle.text}>R$</Text>
                  <BottomSheetTextInput
                    style={commonStyle.text}
                    keyboardType="number-pad"
                    value={highestPrice.toString()}
                    onChangeText={editLimit('high')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.field}>
              <Text style={commonStyle.text}>Categorias</Text>
              <MultiSelect
                ref={tagSelectRef}
                items={ALL_TAGS}
                uniqueKey="id"
                onSelectedItemsChange={setTags}
                selectedItems={tags}
                confirmText="Confirmar"
                hideSearch
                hideSelect
                styles={tagsStyles}
                customChipsRenderer={() => (
                  <TouchableOpacity
                    style={styles.chipsWrapper}
                    onPress={openTagSelector}>
                    <FlatList
                      horizontal
                      data={tags}
                      ItemSeparatorComponent={() => <View style={{width: 5}} />}
                      renderItem={t => (
                        <View style={styles.chip} key={t.index}>
                          <Text style={commonStyle.tiny}>
                            {ALL_TAGS[t.item].name}
                          </Text>
                          <TouchableOpacity onPress={() => removeTag(t.item)}>
                            <MaterialIcons
                              size={14}
                              name="close"
                              color={colors.black}
                            />
                          </TouchableOpacity>
                        </View>
                      )}
                    />
                  </TouchableOpacity>
                )}
                IconRenderer={MaterialIcons}
              />
            </View>
            <View style={styles.actions}>
              <Button style={styles.confirm} onPress={performFilter}>
                <Text style={styles.confirmText}>Aplicar</Text>
              </Button>
              <TouchableOpacity onPress={cleanFilters}>
                <Text style={commonStyle.bold}>Limpar Filtros</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    );
  },
);

export default ProductFilter;
