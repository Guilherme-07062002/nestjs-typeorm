import { PartnerModel, PartnerService } from './partner.service';

const makeSut = () => {
  const mockPartnerModel: PartnerModel = {
    findOne: jest.fn()
  }
  const partnerService = new PartnerService(mockPartnerModel);
  return { partnerService, mockPartnerModel };
}
describe('PartnerService', () => {
  it('should be defined', () => {
    const { partnerService } = makeSut();

    expect(partnerService).toBeDefined();
  });

  describe('findOne', () => {
    it('should return the partner information', async () => {
      const { partnerService, mockPartnerModel } = makeSut();
      const partner = {
        name: 'Partner Name',
        email: 'partner@email.com'
      };
      jest.spyOn(mockPartnerModel, 'findOne').mockResolvedValue(partner);

      const result = await partnerService.findOne(1);

      expect(result).toEqual(partner);
    });

    it('should throw an error when the partner is not found', async () => {
      const { partnerService, mockPartnerModel } = makeSut();

      jest.spyOn(mockPartnerModel, 'findOne').mockResolvedValue(null);

      await expect(partnerService.findOne(1)).rejects.toThrow('Partner not found');
    });
  })
})