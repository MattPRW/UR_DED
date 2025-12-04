interface Props {
  name: string;
}

export default function DayOneGreeting({ name }: Props) {
  return (
    <div className="mt-6 text-center border border-gray-700 rounded-xl p-4">
      <p className="text-xl">Welcome back to coding, {name}.</p>
      <p className="opacity-75">Your skills aren’t rusty—just asleep.</p>
    </div>
  );
}
