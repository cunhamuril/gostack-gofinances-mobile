import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import NumberFormat from 'react-number-format';

import incomeIcon from '../../../../assets/icons/income/income.png';
import outcomeIcon from '../../../../assets/icons/outcome/outcome.png';
import currencySignWhiteIcon from '../../../../assets/icons/currency-sign/currency-sign-white.png';

import { formatDate } from '../../../../utils';

import { IHeaderCardsProps, IDatesHistory } from './interfaces';

import { Container, Card, Header, Title, Date, Value } from './styles';

const HeaderCards: React.FC<IHeaderCardsProps> = ({
  data,
}: IHeaderCardsProps) => {
  const [datesHistory, setDatesHistory] = useState<IDatesHistory>(
    {} as IDatesHistory,
  );

  useEffect(() => {
    const allDates = data.transactions?.map(
      transaction => transaction.created_at,
    );

    const incomeDates = data.transactions
      ?.filter(transaction => transaction.type === 'income')
      .map(transaction => transaction.created_at);

    const outcomeDates = data.transactions
      ?.filter(transaction => transaction.type === 'outcome')
      .map(transaction => transaction.created_at);

    const firstDate = allDates[allDates.length - 1];
    const lastDate = allDates[0];
    const lastIncomeDate = incomeDates[0];
    const lastOutcomeDate = outcomeDates[0];

    const firstDateMonth = formatDate(firstDate, 'MM');
    const lastDateMonth = formatDate(lastDate, 'MM');

    let total;

    if (firstDateMonth === lastDateMonth) {
      total = `${formatDate(firstDate, 'dd')} à ${formatDate(
        lastDate,
        "dd 'de' MMMM",
      )}`;
    } else {
      total = `${formatDate(firstDate, "dd 'de' MMMM")} à ${formatDate(
        lastDate,
        "dd 'de' MMMM",
      )}`;
    }

    setDatesHistory({
      income: formatDate(lastIncomeDate, "dd 'de' MMMM"),
      outcome: formatDate(lastOutcomeDate, "dd 'de' MMMM"),
      total,
    });
  }, [data.transactions]);

  return (
    <Container>
      <Card isFirst>
        <Header>
          <Title>Entradas</Title>
          <Image source={incomeIcon} />
        </Header>
        <View>
          <NumberFormat
            value={data.balance?.income}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix="R$ "
            renderText={value => (
              <Value>{value.replace('.', ',').replace(',', '.')}</Value>
            )}
          />
          <Date>{`Última entrada dia ${datesHistory.income}`}</Date>
        </View>
      </Card>

      <Card>
        <Header>
          <Title>Saídas</Title>
          <Image source={outcomeIcon} />
        </Header>
        <View>
          <NumberFormat
            value={data.balance?.outcome}
            displayType="text"
            thousandSeparator
            prefix="R$ "
            decimalScale={2}
            fixedDecimalScale
            renderText={value => (
              <Value>{value.replace('.', ',').replace(',', '.')}</Value>
            )}
          />
          <Date>{`Última saída dia ${datesHistory.outcome}`}</Date>
        </View>
      </Card>

      <Card isTotal>
        <Header>
          <Title isTotal>Total</Title>
          <Image source={currencySignWhiteIcon} />
        </Header>
        <View>
          <NumberFormat
            value={data.balance?.total}
            displayType="text"
            thousandSeparator
            decimalScale={2}
            fixedDecimalScale
            prefix="R$ "
            renderText={value => (
              <Value isTotal>{value.replace('.', ',').replace(',', '.')}</Value>
            )}
          />
          <Date isTotal>{datesHistory.total}</Date>
        </View>
      </Card>
    </Container>
  );
};

export default HeaderCards;
