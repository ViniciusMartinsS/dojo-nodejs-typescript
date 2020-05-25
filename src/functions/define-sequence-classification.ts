import { defineSequenceAverageValue } from './define-sequence-average-value'
import { defineSequenceMaxValue } from './define-sequence-max-value'
import { defineSequenceMinValue } from './define-sequence-min-value'

import { ClassifyInterface } from '../interface/classify.interface'

export function defineSequenceClassification (
  sequenceAsArray: Array<number>
): ClassifyInterface {
  const sequenceAmount: number = sequenceAsArray.length
  const minValue: number = defineSequenceMinValue(sequenceAsArray)
  const maxValue: number = defineSequenceMaxValue(sequenceAsArray)
  const averageValue: number = defineSequenceAverageValue(sequenceAsArray, sequenceAmount)

  return { minValue, maxValue, averageValue, sequenceAmount }
}
