import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import MainLayout from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <h2 className="text-3xl font-bold">Este es el Home</h2>
    </MainLayout>
  )
}
