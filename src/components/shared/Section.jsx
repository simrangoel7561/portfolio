import './Section.module.css'

function Section({ className = '', children }) {
  return (
    <section className={`section ${className}`}>
      {children}
    </section>
  )
}

export default Section
