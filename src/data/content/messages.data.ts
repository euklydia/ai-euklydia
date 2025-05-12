import api from "../../utils/api";

export const sendMessage = async (occurences: number, message: string) => {
  let body = {};
  if (occurences) {
    body = { message };
  } else {
    body = {
      message,
      new_session: true,
    };
  }
  return await api.post("/send_message", body);
};
