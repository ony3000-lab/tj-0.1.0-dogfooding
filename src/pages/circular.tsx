import { CircularProgress } from 'tailwind-joy/components';

export default function ButtonComparison() {
  return (
    <div className="flex items-center gap-32 bg-white p-80">
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
