import React, { useState, useCallback } from 'react';

import incomeIcon from '../../assets/icons/income/income.png';
import outcomeIcon from '../../assets/icons/outcome/outcome.png';

import { Header, Input, Button } from '../../components';

import {
  Container,
  Title,
  Form,
  SelectWrapper,
  Select,
  SelectIcon,
  SelectText,
} from './styles';

const Register: React.FC = () => {
  const [typeSelected, setTypeSelected] = useState<'income' | 'outcome' | null>(
    null,
  );

  const toggleSelectIncome = useCallback(() => {
    if (typeSelected === 'income') {
      setTypeSelected(null);
    } else {
      setTypeSelected('income');
    }
  }, [typeSelected]);

  const toggleSelectOutcome = useCallback(() => {
    if (typeSelected === 'outcome') {
      setTypeSelected(null);
    } else {
      setTypeSelected('outcome');
    }
  }, [typeSelected]);

  return (
    <>
      <Header />

      <Container>
        <Title>Cadastro</Title>

        <Form>
          <Input placeholder="Nome" />

          <Input placeholder="Preço" />

          <SelectWrapper>
            <Select
              income
              selected={typeSelected === 'income'}
              onPress={toggleSelectIncome}
            >
              <SelectIcon source={incomeIcon} />
              <SelectText>Income</SelectText>
            </Select>
            <Select
              outcome
              selected={typeSelected === 'outcome'}
              onPress={toggleSelectOutcome}
            >
              <SelectIcon source={outcomeIcon} />
              <SelectText>Outcome</SelectText>
            </Select>
          </SelectWrapper>

          <Input placeholder="Categoria" />

          <Button style={{ marginTop: 16 }}>Enviar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
