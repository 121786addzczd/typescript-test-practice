// toBeのテスト
it("数値のテスト", () => {
  expect(2 + 2).toBe(4);
});

it("文字列のテスト", () => {
  expect("Jest").toBe("Jest");
});

it("Booleanのテスト", () => {
  expect(true).toBe(true);
});

// toEqual
it("配列のテスト", () => {
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  expect(array1).toEqual(array2);
});

it("オブジェクトのテスト", () => {
  const object1 = {
    a: 1,
    b: 2,
  };
  const object2 = {
    a: 1,
    b: 2,
  };
  expect(object1).toEqual(object2);
});

// not
it("2+2は5ではない", () => {
  expect(2 + 2).not.toBe(5);
});
