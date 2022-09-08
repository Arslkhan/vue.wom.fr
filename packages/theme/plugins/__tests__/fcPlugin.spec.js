import fcPlugin from '~/plugins/fcPlugin';

const injectFnMock = jest.fn();

describe.skip('Format currency plugin', () => {
  it('should inject $fc', () => {
    fcPlugin({ app: {} }, injectFnMock);
    expect(injectFnMock).toHaveBeenCalledTimes(1);
  });
});
