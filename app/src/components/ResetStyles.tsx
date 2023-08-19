import Button from "./Button";

function ResetStyles() {

  const resetStyles = () => {
    localStorage.removeItem('savedLight')
    localStorage.removeItem('savedDark')
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