import PropTypes from 'prop-types'

import * as S from './styles'

export function Logo({ admin, header, footer }) {
  return (
    <S.Container $header={header} $footer={footer}>
      <svg
        width="26"
        height="30"
        viewBox="0 0 26 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.0001 0L25.9905 7.5V22.5L13.0001 30L0.00976562 22.5V7.5L13.0001 0Z"
          fill="currentColor"
        />
      </svg>
      <div>food explorer</div>
      {admin && <span>admin</span>}
    </S.Container>
  )
}

Logo.propTypes = {
  admin: PropTypes.bool,
  header: PropTypes.bool,
  footer: PropTypes.bool,
}
