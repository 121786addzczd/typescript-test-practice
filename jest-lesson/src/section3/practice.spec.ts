
import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockAxios.get.mockClear();
  });

  it("ユーザーを取得できる", async () => {
    const users = [{ name: "Taro" }, { name: "Hanako" }];
    const response = { data: users };
    mockAxios.get.mockResolvedValue(response);

    const result = await Users.all();
    // 返却された値が期待通りか
    expect(result).toEqual(users);
    // 正しいURL /users.json で呼び出されたことを確認
    expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
  });
});