import { Converter } from "../utils/converters";
import { angleConverter } from "./angle";
import { areaConverter } from "./area";
import { lengthConverter } from "./length";
import { temperatureConverter } from "./temperature";
import { timeConverter } from "./time";
import { volumeConverter } from "./volume";
import { weightConverter } from "./weigth";

const converters = [
  lengthConverter,
  temperatureConverter,
  timeConverter,
  weightConverter,
  areaConverter,
  volumeConverter,
  angleConverter,
];

const unitConverterMap = new Map<string, Converter>();

// Initialize converter registry
converters.forEach((converter) => {
  unitConverterMap.set(converter.category, converter); // Store by category instead of unit
});

export function getConverter(unit: string): Converter | undefined {
  return converters.find((converter) => converter.units.includes(unit));
}

export function getSupportedUnits(): string[] {
  return Array.from(unitConverterMap.keys());
}
