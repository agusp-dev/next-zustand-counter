
export const ActionButton = ({ title, onclick }) => {
  return (
    <button 
      type='button' 
      onClick={onclick}
      >{ title }
    </button>
  )
}
