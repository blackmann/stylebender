import clsx from 'clsx'

interface Props extends React.PropsWithChildren {
  className?: string
}

function ComponentHeader({ children, className }: Props) {
  return (
    <header className={clsx('medium text-secondary', className)}>
      {children}
    </header>
  )
}

export default ComponentHeader
