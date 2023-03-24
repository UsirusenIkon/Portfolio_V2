import "./container.css"

function Container({children, className, id, ...rest}) {
  return (
    <section id={id} className={`container ${className}`} {...rest}>
      {children}
    </section>
  )
}

export default Container;