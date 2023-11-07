import PropTypes from 'prop-types'

import { FiMinus, FiPlus } from 'react-icons/fi'

import * as S from './styles'

export function Stepper({ amount, increase, decrease }) {
  return (
    <S.Container>
      <button
        onClick={decrease}
        disabled={amount <= 1}
        title="Diminuir unidades"
      >
        <FiMinus />
      </button>
      <span>{amount < 10 ? `0${amount}` : amount}</span>
      <button onClick={increase} title="Aumentar unidades">
        <FiPlus />
      </button>
    </S.Container>
  )
}

Stepper.propTypes = {
  amount: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}
