import { calculateDays, calculateMonths, calculateYears, formatPublishingTime, formatUserLocation } from './feedUtils';

describe('calculate years', () => {
  test('3000 days are 8 years', () => {
    const years = calculateYears(3000);
    expect(years).toBe(8);
  });

  test('1000 days are 2 years', () => {
    const years = calculateYears(1000);
    expect(years).toBe(2);
  });

  test('360 days are 0 years', () => {
    const years = calculateYears(360);
    expect(years).toBe(0);
  });
});

describe('calculate months', () => {
  test('60 days are 2 months', () => {
    const months = calculateMonths(60);
    expect(months).toBe(2);
  });

  test('30 days are 1 month', () => {
    const months = calculateMonths(30);
    expect(months).toBe(1);
  });

  test('10 days are 0 months', () => {
    const months = calculateMonths(10);
    expect(months).toBe(0);
  });
});

describe('calculate days', () => {
  test('60 hours are 2 days', () => {
    const days = calculateDays(60);
    expect(days).toBe(2);
  });

  test('30 hours are 1 day', () => {
    const days = calculateDays(30);
    expect(days).toBe(1);
  });

  test('20 hours are 0 days', () => {
    const days = calculateDays(20);
    expect(days).toBe(0);
  });
});

describe('Format publishing time', () => {
  test('28000 hours are 3 years', () => {
    const publishingTime = formatPublishingTime(28000)
    expect(publishingTime).toBe('3 years')
  });

  test('14000 hours are 1 year', () => {
    const publishingTime = formatPublishingTime(14000)
    expect(publishingTime).toBe('1 year')
  });

  test('2000 hours are 2 months', () => {
    const publishingTime = formatPublishingTime(2000)
    expect(publishingTime).toBe('2 months')
  });

  test('1000 hours are 1 month', () => {
    const publishingTime = formatPublishingTime(1000)
    expect(publishingTime).toBe('1 month')
  });

  test('60 hours are 2 days', () => {
    const publishingTime = formatPublishingTime(60)
    expect(publishingTime).toBe('2 days')
  });

  test('30 hours are 1 day', () => {
    const publishingTime = formatPublishingTime(30)
    expect(publishingTime).toBe('1 day')
  });

  test('20 hours are 20 hours', () => {
    const publishingTime = formatPublishingTime(20)
    expect(publishingTime).toBe('20 hours')
  });
});

describe('Format user location', () => {
  test('if location is null it should return an empty string', () => {
    const userLocation = formatUserLocation(null)
    expect(userLocation).toBe('')
  });
  test('if location is NOT null it should return the string "at ${location}"', ()=>{
    const userLocation = formatUserLocation('Argentina')
    expect(userLocation).toBe('at Argentina')
  })
});
