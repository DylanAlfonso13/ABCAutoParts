import Nav from '../components/Nav';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-2">
        <h1 className="text-4xl font-bold">Welcome to ABC Auto Parts</h1>
        <p className="mt-4 text-lg">Your one-stop shop for all your auto parts needs.</p>
      </main>
    </div>
  )
}