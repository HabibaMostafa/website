'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-light-text-secondary/10 dark:border-dark-text-secondary/10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center text-light-text-secondary dark:text-dark-text-secondary">
          <p>&copy; {currentYear} Habiba. Built with intention.</p>
        </div>
      </div>
    </footer>
  )
}
