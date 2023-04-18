const integerInput = document.getElementById("Enternumber");

integerInput.addEventListener("input", () => {
  const value = parseInt(integerInput.value);

  if (value < 0) {
    alert("Enter a positive value");
  } else if (value % 2 === 0) {
    const NextThreeEvenNumbers = [value + 2, value + 4, value + 6];
    alert(`Next three even numbers are: ${NextThreeEvenNumbers.join(", ")}`);
  } else {
    const NextThreeOddNumbers = [value + 2, value + 4, value + 6];
    alert(`Next three odd numbers are: ${NextThreeOddNumbers.join(", ")}`);
  }
});
