import Button from "./Button";
import { theme } from "../hooks/use-theme";

function ResetStyles() {

  const resetStyles = () => {
    localStorage.removeItem('savedLight')
    localStorage.removeItem('savedDark')
    theme.value = 'light';
    window.location.reload();
  }

  return (
    <Button className="plain" onClick={resetStyles}>
      <span className="material-symbols-outlined me-1">replay</span>
      Reset styles
    </Button>
  )

}

export default ResetStyles