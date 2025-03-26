const unroll = require("./unroll");

describe("#unroll", function () {
  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("correctly unrolls a 3x3 matrix", function () {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it("correctly unrolls a 4x4 matrix", function () {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it("correctly unrolls a 2x2 matrix", function () {
    const smallSquare = [
      [1, 2],
      [3, 4]
    ];
    expect(unroll(smallSquare)).toEqual([1, 2, 4, 3]);
  });

  it("correctly unrolls a 1x1 matrix", function () {
    const singleElement = [[1]];
    expect(unroll(singleElement)).toEqual([1]);
  });

  it("correctly unrolls a 5x5 matrix", function () {
    const bigSquare = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    expect(unroll(bigSquare)).toEqual([
      1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9,
      14, 19, 18, 17, 12, 13
    ]);
  });
});
