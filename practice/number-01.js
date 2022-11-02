// 123
// C1: extract all digits and compare from right to left
// C2: convert to string and compare
export function isIncreasingNumberV1(n) {
  if (n < 10) return false;

  let remaining = n;
  let prevDigit = 10;

  while (remaining > 0) {
    // if found an invalid case return false
    const lastDigit = remaining % 10;
    if (lastDigit >= prevDigit) return false;

    // update prevDigit to lastDigit
    prevDigit = lastDigit;

    //update condition
    remaining = Math.trunc(remaining / 10);
  }

  return true;
}

export function isIncreasingNumberV2(n) {
  if (n < 10) return false;

  const numberString = n.toString();
  for (let i = 1; i < numberString.length; i++) {
    if (numberString[i] <= numberString[i - 1]) return false;
  }

  return true;
}

// '123'
