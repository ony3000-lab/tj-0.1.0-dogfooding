import { CircularProgress } from 'tailwind-joy/components';

export default function ButtonComparison() {
  return (
    <div className="flex min-h-screen flex-col gap-32 bg-white px-20 py-32">
      <div className="space-y-8">
        <div>
          <CircularProgress className="[--CircularProgress-size:80px]" />
        </div>
        <div>
          <CircularProgress style={{ '--CircularProgress-size': '80px' }} />
        </div>
      </div>
    </div>
  );
}
