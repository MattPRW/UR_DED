import DayOneGreeting from "./components/DayOneGreeting";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Ur Ded</h1>
      <p className="text-lg opacity-80">
        A friendly game of subtle sabotage and household theatrics.
      </p>

      <DayOneGreeting name="Player Zero" />
    </main>
  );
}
