import React, { useState, useRef, useCallback } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';

import incomeIcon from '../../assets/icons/income/income.png';
import outcomeIcon from '../../assets/icons/outcome/outcome.png';

import schema from './schema';
import { IFormData } from './interfaces';
import { getValidationErrors } from '../../utils';
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
  const formRef = useRef<FormHandles>(null);

  const [typeSelected, setTypeSelected] = useState<'income' | 'outcome' | null>(
    null,
  );

  const toggleSelectIncome = useCallback(() => {
    setTypeSelected('income');
  }, []);

  const toggleSelectOutcome = useCallback(() => {
    setTypeSelected('outcome');
  }, []);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        if (!typeSelected) {
          return Alert.alert('Erro!', 'Informe o tipo de transação');
        }

        await schema.validate(data, {
          abortEarly: false,
        });

        const payload = {
          ...data,
          type: typeSelected,
        };

        console.log(payload);

        ToastAndroid.showWithGravityAndOffset(
          'Transação cadastrada com sucesso!',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );

        formRef.current?.reset(data);
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [typeSelected],
  );

  return (
    <>
      <Header />

      <Container>
        <Title>Cadastro</Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" returnKeyType="next" />

          <Input
            name="value"
            placeholder="Preço"
            keyboardType="numeric"
            returnKeyType="next"
          />

          <SelectWrapper>
            <Select
              income
              selected={typeSelected === 'income'}
              onPress={toggleSelectIncome}
            >
              <SelectIcon source={incomeIcon} />
              <SelectText>Entrada</SelectText>
            </Select>

            <Select
              outcome
              selected={typeSelected === 'outcome'}
              onPress={toggleSelectOutcome}
            >
              <SelectIcon source={outcomeIcon} />
              <SelectText>Saída</SelectText>
            </Select>
          </SelectWrapper>

          <Input
            name="category"
            placeholder="Categoria"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />

          <Button
            style={{ marginTop: 16 }}
            onPress={() => formRef.current?.submitForm()}
          >
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
