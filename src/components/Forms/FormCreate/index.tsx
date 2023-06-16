import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Masks, formatWithMask } from "react-native-mask-input";
import uuid from "react-native-uuid";

import { MultipleChoiceInput, TextInput } from "../../Inputs";
import { Container, FooterContainer } from "./styles";
import { option } from "../../Inputs/MultipleChoiceInput";
import { Button } from "../../Buttons";
import { validation } from "./validation";
import { ListData, TypeData } from "../../../interfaces";
import { addIncome, editIncome } from "../../../redux/incomeSlice";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addInvoice, editInvoice } from "../../../redux/invoiceSlice";

const data = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

export type Inputs = {
  id?: string | number[];
  name: string;
  value: string;
  date: string;
  monthlyRepeat: boolean;
};

interface FormCreateProps {
  typeData: TypeData;
  onEnd: () => void;
  initialValue?: ListData;
}

const FormCreate: React.FC<FormCreateProps> = ({
  typeData,
  onEnd,
  initialValue,
}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: yupResolver(validation),
  });

  useEffect(() => {
    if (initialValue) {
      const { label, amount, date, monthlyRepeat, id } = initialValue;

      setValue("id", id);
      setValue("name", label);
      setValue("value", amount.toString());
      setValue("date", moment(date).format("DD/MM/YYYY"));
      setValue("monthlyRepeat", monthlyRepeat);
    }
  }, [initialValue]);

  const handleCancel = useCallback(() => {
    onEnd();
  }, [onEnd]);

  const parseData = useCallback((data: Inputs): ListData => {
    return {
      id: data?.id ? data.id : uuid.v4(),
      label: data.name,
      amount: parseFloat(
        data.value
          .replace(".", "")
          .replace(",", ".")
          .replace(/[^0-9.]/g, "")
      ),
      checked: false,
      date: moment(data.date, "DD/MM/YYYY").toISOString(),
      monthlyRepeat: data.monthlyRepeat,
    };
  }, []);

  const handleConfirm = useCallback(
    (data: Inputs) => {
      if (initialValue) {
        if (typeData === "income") dispatch(editIncome(parseData(data)));
        if (typeData === "invoice") dispatch(editInvoice(parseData(data)));
        onEnd();
        return;
      }

      if (typeData === "income") dispatch(addIncome(parseData(data)));
      if (typeData === "invoice") dispatch(addInvoice(parseData(data)));
      onEnd();
    },
    [onEnd, typeData, initialValue]
  );

  return (
    <Container>
      <TextInput
        name="name"
        control={control}
        errorMessage={errors.name?.message}
        label="nome"
      />
      <TextInput
        name="value"
        control={control}
        errorMessage={errors.value?.message}
        label="Valor"
        keyboardType="numeric"
        mask={Masks.BRL_CURRENCY}
        maskAutoComplete
      />
      <TextInput
        name="date"
        control={control}
        errorMessage={errors.date?.message}
        label="Data"
        icon
        keyboardType="number-pad"
        mask={Masks.DATE_DDMMYYYY}
        maskAutoComplete
      />
      <MultipleChoiceInput
        name="monthlyRepeat"
        control={control}
        options={data}
        errorMessage={errors.monthlyRepeat?.message}
      />
      <FooterContainer>
        <Button label="Cancelar" onPress={handleCancel} secondary error />
        <Button label="Confirmar" onPress={handleSubmit(handleConfirm)} />
      </FooterContainer>
    </Container>
  );
};

export default FormCreate;
