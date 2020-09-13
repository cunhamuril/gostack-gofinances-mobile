import React from 'react';
import { FlatList } from 'react-native';
import NumberFormat from 'react-number-format';

import { formatDate } from '../../../../utils';

import { IListProps, IListItemProps } from './interfaces';

import {
  Container,
  Title,
  ListItemContainer,
  Description,
  Value,
  Footer,
  FooterText,
} from './styles';

const ListItem: React.FC<IListItemProps> = ({ item }: IListItemProps) => (
  <ListItemContainer>
    <Description>{item.title}</Description>

    {item.type === 'income' ? (
      <NumberFormat
        value={item.value}
        displayType="text"
        thousandSeparator
        decimalScale={2}
        fixedDecimalScale
        prefix="R$ "
        renderText={value => (
          <Value type={item.type}>
            {value.replace('.', ',').replace(',', '.')}
          </Value>
        )}
      />
    ) : (
      <NumberFormat
        value={item.value}
        displayType="text"
        thousandSeparator
        decimalScale={2}
        fixedDecimalScale
        prefix="- R$ "
        renderText={value => (
          <Value type={item.type}>
            {value.replace(',', '.').replace('.', ',')}
          </Value>
        )}
      />
    )}

    <Footer>
      <FooterText>{item.category.title}</FooterText>
      <FooterText>{formatDate(item.created_at)}</FooterText>
    </Footer>
  </ListItemContainer>
);

const List: React.FC<IListProps> = ({ data }: IListProps) => (
  <Container>
    <Title>Listagem</Title>

    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={ListItem}
    />
  </Container>
);

export default List;
