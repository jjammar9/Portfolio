interface MenuToggleProps {
  isOpen: boolean
  onClick: () => void
}

export function MenuToggle({ isOpen, onClick }: MenuToggleProps) {
  return (
    <a
      href="#"
      className={`menu-toggle ${isOpen ? 'menu-toggle--close' : ''}`}
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      <span className="top" />
      <span className="middle" />
      <span className="bottom" />
    </a>
  )
}
