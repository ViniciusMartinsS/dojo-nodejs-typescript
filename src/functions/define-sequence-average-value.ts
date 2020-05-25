export function defineSequenceAverageValue (
  sequence: Array<number>, sequenceAmount: number
): number {
  let sequenceSum: number = 0

  sequence.forEach((sequenceNumber: number): void => {
    sequenceSum = sequenceSum + sequenceNumber
  })

  return sequenceSum / sequenceAmount
}
