import PropTypes from 'prop-types'
import '../../styles/atoms/search-input.css'

function SearchInput({ value, onChange, onSubmit, placeholder = 'Buscar productos', ariaLabel = 'Buscar en el catálogo' }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedValue = value.trim()
    if (!trimmedValue && !onSubmit) {
      return
    }
    onSubmit?.(trimmedValue)
  }

  return (
    <form className="search-input" role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-input__field"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete="off"
      />
      <button type="submit" className="search-input__button" aria-label="Buscar">
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
      </button>
    </form>
  )
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default SearchInput
