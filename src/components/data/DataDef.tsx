
export interface DataAttribute {
  name: string,
  value: number,
  unit: string
}

export interface DataElement {
  title: string,
  attributes: DataAttribute[]
}