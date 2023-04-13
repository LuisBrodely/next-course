import MainLayout from '../../components/layouts/MainLayout'
import { CSSProperties } from 'react'

const style: CSSProperties = {
  background: '#F0F0F0',
  padding: '20px'
}

export default function Pricing() {
  return (
    <MainLayout>
      <h2 className="text-3xl font-bold" style={style}>Este es el Pricing</h2>
    </MainLayout>
  )
}

