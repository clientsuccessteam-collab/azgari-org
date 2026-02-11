'use client';

import React, { useState } from 'react';

// Interfaces
interface PaymentTerm {
  months: number;
  label: string;
}

interface CalculatorState {
  totalAmount: number;
  downPayment: number;
  interestRate: number;
  termMonths: number;
}

interface PaymentResult {
  principal: number;
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
}

interface PaymentCalculatorProps {
  defaultAmount?: number;
  defaultDownPayment?: number;
  className?: string;
}

// Constants
const PAYMENT_TERMS: PaymentTerm[] = [
  { months: 12, label: '12 months' },
  { months: 24, label: '24 months' },
  { months: 36, label: '36 months' },
  { months: 48, label: '48 months' },
  { months: 60, label: '60 months' },
];

const DEFAULT_INTEREST_RATE = 6.99;

export const PaymentCalculator: React.FC<PaymentCalculatorProps> = ({
  defaultAmount = 50000,
  defaultDownPayment = 10000,
  className = '',
}) => {
  const [state, setState] = useState<CalculatorState>({
    totalAmount: defaultAmount,
    downPayment: defaultDownPayment,
    interestRate: DEFAULT_INTEREST_RATE,
    termMonths: 36,
  });

  const calculatePayment = (): PaymentResult => {
    const principal = state.totalAmount - state.downPayment;
    const monthlyRate = state.interestRate / 100 / 12;
    const numberOfPayments = state.termMonths;

    let monthlyPayment: number;
    let totalInterest: number;

    if (state.interestRate === 0) {
      monthlyPayment = principal / numberOfPayments;
      totalInterest = 0;
    } else {
      monthlyPayment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      totalInterest = monthlyPayment * numberOfPayments - principal;
    }

    return {
      principal,
      monthlyPayment: Math.round(monthlyPayment * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalCost: Math.round((state.totalAmount + totalInterest) * 100) / 100,
    };
  };

  const handleInputChange = (field: keyof CalculatorState, value: number): void => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const result = calculatePayment();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className={`rounded-2xl border-2 border-gray-200 bg-white overflow-hidden ${className}`}>
      <div
        className="px-4 py-4 sm:px-6 sm:py-5 border-b-2 border-gray-100"
        style={{ backgroundColor: 'var(--color-cream)' }}
      >
        <h2
          className="text-lg sm:text-xl font-bold"
          style={{ color: 'var(--color-primary)' }}
        >
          Payment Calculator
        </h2>
      </div>

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label
              htmlFor="totalAmount"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Total Amount
            </label>
            <input
              type="number"
              id="totalAmount"
              value={state.totalAmount}
              onChange={(e) => handleInputChange('totalAmount', Number(e.target.value))}
              min={0}
              step={1000}
              className="w-full rounded-lg border-2 border-gray-200 px-3 py-2.5 text-base focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="downPayment"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Down Payment
            </label>
            <input
              type="number"
              id="downPayment"
              value={state.downPayment}
              onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
              min={0}
              step={1000}
              className="w-full rounded-lg border-2 border-gray-200 px-3 py-2.5 text-base focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="interestRate"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Interest Rate (%)
            </label>
            <input
              type="number"
              id="interestRate"
              value={state.interestRate}
              onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
              min={0}
              max={100}
              step={0.01}
              className="w-full rounded-lg border-2 border-gray-200 px-3 py-2.5 text-base focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="termMonths"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Term
            </label>
            <select
              id="termMonths"
              value={state.termMonths}
              onChange={(e) => handleInputChange('termMonths', Number(e.target.value))}
              className="w-full rounded-lg border-2 border-gray-200 px-3 py-2.5 text-base focus:border-amber-500 focus:outline-none bg-white"
            >
              {PAYMENT_TERMS.map((term) => (
                <option key={term.months} value={term.months}>
                  {term.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-xl p-4 sm:p-5 space-y-3" style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className="flex justify-between items-center text-sm sm:text-base">
            <span className="text-gray-600">Principal:</span>
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              {formatCurrency(result.principal)}
            </span>
          </div>
          <div
            className="flex justify-between items-center text-base sm:text-lg font-bold rounded-lg px-3 py-2 -mx-3"
            style={{ backgroundColor: 'var(--color-accent-light)' }}
          >
            <span style={{ color: 'var(--color-primary)' }}>Monthly Payment:</span>
            <span style={{ color: 'var(--color-accent-hover)' }}>
              {formatCurrency(result.monthlyPayment)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm sm:text-base">
            <span className="text-gray-600">Total Interest:</span>
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              {formatCurrency(result.totalInterest)}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm sm:text-base">
            <span className="text-gray-600">Total Cost:</span>
            <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
              {formatCurrency(result.totalCost)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;
