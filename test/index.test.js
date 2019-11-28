import QueryString from '../lib/index.js'

test('Uses correct default values', () => {
    expect(QueryString.get('a', 5)).toBe(5)
    expect(QueryString.get('b', 'hej')).toBe('hej')
})

test('Parses the query string correctly', () => {
    let qs = 'about:blank/test.html?a=2&b=3&c=hej&d=dig'

    expect(QueryString.get('a', null, qs)).toBe('2')
    expect(QueryString.get('b', null, qs)).toBe('3')
    expect(QueryString.get('c', null, qs)).toBe('hej')
    expect(QueryString.get('d', null, qs)).toEqual(encodeURI('dig'))
})
