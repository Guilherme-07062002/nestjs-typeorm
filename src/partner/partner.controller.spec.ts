import { PartnerController } from "./partner.controller";

const makeSut = () => {
  const mockPartnerService = {        
    findOne: jest.fn()
  };
  const controller = new PartnerController(mockPartnerService as any);
  return { controller, mockPartnerService };
}

describe('testing partner controller', () => {
  it('should be defined', () => {
    const { controller } = makeSut();

    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('should return the partner information', async () => {
      const { controller, mockPartnerService } = makeSut();
      const partner = {
        partnerId: 1,
        name: 'Partner Name',
        email: 'partner@email.com'
      };

      mockPartnerService.findOne.mockResolvedValue(partner);

      const result = await controller.findOne('1');
      expect(mockPartnerService.findOne).toHaveBeenCalledWith(1);
      expect(result).toEqual(partner);
    })
  });
});