export class ListCustomerDemandDto {
  customerId: string
  name: string
  description: string
  createdAt: Date
  endLine: string | null
  designer: string | null
  copywriter: string | null
  readyToSend?: boolean | undefined
  readyToPost?: boolean | undefined
  posted?: boolean | undefined
}
