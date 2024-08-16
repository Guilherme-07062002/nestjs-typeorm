export enum PartnerTypeEnum {
    physicalPerson = "PF",
    legalPerson = "PJ",
}
  
export type PartnerInformationDTO = {
    partnerId?: number;
    partnerType: PartnerTypeEnum;
    nameResponsible: string;
    mobilePhoneResponsible: string;
    emailResponsible: string;
    cpfResponsible?: string;
    name?: string;
    street: string;
    addressNumber: string;
    complement?: string;
    neighborhood: string;
    zipCode: string;
    city: string;
    state: string;
    cnpj?: string;
    phone?: string;
    email?: string;
};