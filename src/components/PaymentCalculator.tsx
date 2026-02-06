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
    <div className={`payment-calculator ${className}`}>
      <h2>Payment Calculator</h2>
      
      <div className="calculator-inputs">
        <div className="input-group">
          <label htmlFor="totalAmount">Total Amount</label>
          <input
            type="number"
            id="totalAmount"
            value={state.totalAmount}
            onChange={(e) => handleInputChange('totalAmount', Number(e.target.value))}
            min={0}
            step={1000}
          />
        </div>

        <div className="input-group">
          <label htmlFor="downPayment">Down Payment</label>
          <input
            type="number"
            id="downPayment"
            value={state.downPayment}
            onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
            min={0}
            step={1000}
          />
        </div>

        <div className="input-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            value={state.interestRate}
            onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
            min={0}
            max={100}
            step={0.01}
          />
        </div>

        <div className="input-group">
          <label htmlFor="termMonths">Term</label>
          <select
            id="termMonths"
            value={state.termMonths}
            onChange={(e) => handleInputChange('termMonths', Number(e.target.value))}
          >
            {PAYMENT_TERMS.map((term) => (
              <option key={term.months} value={term.months}>
                {term.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="calculator-results">
        <div className="result-item">
          <span className="result-label">Principal:</span>
          <span className="result-value">{formatCurrency(result.principal)}</span>
        </div>
        <div className="result-item highlight">
          <span className="result-label">Monthly Payment:</span>
          <span className="result-value">{formatCurrency(result.monthlyPayment)}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Total Interest:</span>
          <span className="result-value">{formatCurrency(result.totalInterest)}</span>
        </div>
        <div className="result-item">
          <span className="result-label">Total Cost:</span>
          <span className="result-value">{formatCurrency(result.totalCost)}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCalculator;
