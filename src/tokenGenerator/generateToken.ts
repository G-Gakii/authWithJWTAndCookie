import "dotenv/config";
import jwt from "jsonwebtoken";

const createSecretToken = (id: string) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN as string, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export default createSecretToken;
