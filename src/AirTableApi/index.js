import axios from "axios";

const getApiUrl = () =>
  `https://api.airtable.com/v0/appWhw6pDtpSFF2kL/Content?api_key=keysFlotDxry6Cwrv&fields%5B%5D=Header+image&fields%5B%5D=Headline&fields%5B%5D=Sub-headline&`;

const getItemsLength = () =>
  "https://api.airtable.com/v0/appWhw6pDtpSFF2kL/Content?api_key=keysFlotDxry6Cwrv&fields%5B%5D=Headline";

export const getDataFromAirTable = async () => {
  try {
    const res = await axios.get(getApiUrl());
    if (res?.data?.records.length > 0) {
      return res?.data?.records;
    }
    return [];
  } catch (error) {
    console.error(error);
  }
};

export const getNumberOfPages = async () => {
  try {
    const res = await axios.get(getItemsLength());
    if (res?.data?.records.length > 0) {
      return res?.data?.records.length;
    }
    return 0;
  } catch (error) {
    console.error(error);
  }
};
