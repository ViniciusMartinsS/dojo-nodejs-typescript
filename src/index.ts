import { question } from 'readline-sync'

import {
  defineSequenceClassification,
  responseFormatter
 } from "./functions";

import { ClassifyInterface } from './interface/classify.interface'

export function classifySequence (): string {
  const sequence: string = question('Define a sequence: ')
  const sequenceAsArray: Array<number> = sequence.split(' ')
    .filter((sequence: string): string => sequence)
    .map((sequence: string): number => +sequence)

  const response: ClassifyInterface = defineSequenceClassification(sequenceAsArray)
  return responseFormatter(response)
}
