import { ShoppingList } from "./practice";

/**
 *  1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース
 *  2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース
 *  3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース
 */

describe("ShoppingList", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItem", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("apple");
      expect(shoppingList.list).toEqual(["apple"]);
    });
  });

  describe("removeItem", () => {
    it("アイテムをリストから削除する", () => {
      const apple = "apple"
      shoppingList.addItem(`${apple}`);
      shoppingList.removeItem(`${apple}`);
      expect(shoppingList.list).not.toContain(`${apple}`);
    });

    it("リストにアイテムが存在しない場合はエラー", () => {
      const nonItem = "reddragon"
      expect(() => shoppingList.removeItem(`${nonItem}`)).toThrow(`アイテム: ${nonItem} は存在しません`);
    });
  });
});
