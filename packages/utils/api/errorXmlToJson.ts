import { DOMParser } from "@xmldom/xmldom";

interface MndXmlError {
  code: string;
  message: string;
}

const xmlToJson = (xmlString: string): MndXmlError => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  const result: MndXmlError = {
    code: "",
    message: "",
  };

  result["code"] = xmlDoc.getElementsByTagName("CODE")[0].textContent || "";
  result["message"] =
    xmlDoc
      .getElementsByTagName("MESSAGE")[0]
      .textContent?.trim()
      .replace("\n", "") || "";

  return result;
};

export default xmlToJson;
