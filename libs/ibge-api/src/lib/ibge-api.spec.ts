import { ibgeApi } from './ibge-api';

describe('ibgeApi', () => {
  it('should work', () => {
    expect(ibgeApi()).toEqual('ibge-api');
  });
});
