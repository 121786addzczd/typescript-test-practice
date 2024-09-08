it("モック関数が呼び出される", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

it("モック関数が3回呼び出される", () => {
  const mockFunc = jest.fn();
  for (let step = 0; step < 3; step++) {
    mockFunc();
  }
  expect(mockFunc).toHaveBeenCalledTimes(3);
});

it("モック関数に引数にhogeが渡される", () => {
  const mockFunc = jest.fn();
  const arg = "hoge"; 
  mockFunc(`${arg}`);
  expect(mockFunc).toHaveBeenCalledWith(`${arg}`);
});

