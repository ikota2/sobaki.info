import { findYaCode } from './findYaCode';
import { AllStations } from '../types';

describe('findYaCode', () => {
  const mockStations: AllStations[] = [
    {
      direction: 'North',
      stations: [
        { codes: { esr_code: '001', yandex_code: 'YA001' }, title: 'Station1' },
        { codes: { esr_code: '002', yandex_code: 'YA002' }, title: 'Station2' }
      ]
    },
    {
      direction: 'South',
      stations: [
        { codes: { esr_code: '003', yandex_code: 'YA003' }, title: 'Station3' }
      ]
    }
  ];

  it('returns the correct Yandex code for a given station title', () => {
    expect(findYaCode('Station1', mockStations)).toBe('YA001');
    expect(findYaCode('Station3', mockStations)).toBe('YA003');
  });

  it('returns an empty string if the station is not found', () => {
    expect(findYaCode('StationX', mockStations)).toBe('');
  });
});
