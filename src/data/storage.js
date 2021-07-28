import fs from "fs";

 class Storage {
  static data = fs.existsSync("storage.json")
    ? JSON.parse(fs.readFileSync("storage.json", "utf8"))
    : {};

  static write = () =>
    fs.existsSync("storage.json")
      ? fs.writeFileSync("storage.json", JSON.stringify(this.data, null, 2))
      : fs.appendFileSync("storage.json", JSON.stringify(this.data, null, 2));
}
export default Storage;