import { ClassifyInterface } from '../interface/classify.interface'

export function responseFormatter (params: ClassifyInterface): string {
  const { minValue, maxValue, averageValue, sequenceAmount } = params

  return `
    - Sequence Minimum Value: ${minValue};
    - Sequence Maximum Value: ${maxValue};
    - Sequence Amount: ${sequenceAmount};
    - Sequence Average Value:  ${averageValue};
  `
}
