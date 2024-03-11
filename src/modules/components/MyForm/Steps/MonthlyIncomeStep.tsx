import { TextField, InputAdornment } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { IFormInput } from "../models/FormInputTypes";
import { FormStepLayout } from '../FormStepLayout';

export const MonthlyIncomeStep = () => {
  const { register } = useFormContext<IFormInput>();

  return (
    <FormStepLayout
      nameId="monthlyIncome"
      title="¿Cuál es tu ingreso mensual actual?"
    >
      <TextField
        {...register("monthlyIncome", {
          required: "Este campo es obligatorio",
          maxLength: {
            value: 7,
            message: "El número no puede ser mayor a 7 dígitos"
          },
          pattern: {
            value: /^[0-9]*$/,
            message: "Por favor ingresa un número válido"
          },
        })}
        placeholder="Ingreso mensual actual"
        type="number"
        InputProps={{
          inputProps: { min: 0, step: 1 },
          startAdornment: <InputAdornment position="start">€</InputAdornment>,
        }}
      />
    </FormStepLayout>
  );
};

