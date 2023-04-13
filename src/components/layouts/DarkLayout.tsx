interface propsWithChildren {
  children: React.ReactNode
}

export default function DarkLayout ({ children }: propsWithChildren) {
  return (
    <div className=' bg-red-200 rounded'>
			<h2>Dark Layout</h2>
      { children }
    </div>
  )
}

