import { Button as JoyButton } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button } from 'tailwind-joy/components';

export default function ButtonComparison() {
  return (
    <CssVarsProvider>
      <div className="flex min-h-screen flex-col gap-32 bg-white px-20 py-32">
        <div className="space-y-8">
          <div>
            <JoyButton
              size="sm"
              color="success"
            >
              Button
            </JoyButton>
          </div>
          <div>
            <Button
              size="sm"
              color="success"
            >
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <JoyButton>Button</JoyButton>
          </div>
          <div>
            <Button>Button</Button>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <JoyButton
              size="lg"
              color="danger"
            >
              Button
            </JoyButton>
          </div>
          <div>
            <Button
              size="lg"
              color="danger"
            >
              Button
            </Button>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
}
