import { Button as JoyButton } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { Button } from 'tailwind-joy/components';

export default function ButtonComparison() {
  return (
    <CssVarsProvider>
      <div className="flex items-center gap-32 bg-white p-80">
        <div className="space-y-8">
          <div>
            <JoyButton
              size="sm"
              color="danger"
              className="font-[inherit]"
            >
              Button
            </JoyButton>
          </div>
          <div>
            <Button
              size="sm"
              color="danger"
              className="font-[inherit]"
            >
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <JoyButton
              color="success"
              className="font-[inherit]"
            >
              Button
            </JoyButton>
          </div>
          <div>
            <Button
              color="success"
              className="font-[inherit]"
            >
              Button
            </Button>
          </div>
        </div>
        <div className="space-y-8">
          <div>
            <JoyButton
              size="lg"
              color="primary"
              className="font-[inherit]"
            >
              Button
            </JoyButton>
          </div>
          <div>
            <Button
              size="lg"
              color="primary"
              className="font-[inherit]"
            >
              Button
            </Button>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
}
